<template>
  <div class="app__btns">
  <my-select
      v-model="selectedSort"
      :options="sortOption"
  /></div>
  <post-list
      :posts="sortedNews"
      :public="public"
      :loading="loading"
  />
  <div ref="observer" class="observer"></div>
</template>
<script>

import postList from "@/components/post/PostList";
import newsRequest from "@/mixins/newsRequest";
import mySelect from "@/components/UI/MySelect";

export default {
  name: "NewsPublic",
  components: {postList,mySelect},
  mixins: [newsRequest],
  data(){
    return {
      posts:[],
      public: true,
      loading:true,
      page:1,
      limit:10,
      totalPage:0,
      selectedSort:'',
      sortOption:[
        {value:'title', name: "Sorted by title"},
        {value:'body',name: "Sorted by body"},
      ]
    }
  },
  methods: {
    async getNews () {
      let new_posts
      try {
        new_posts = await this.newsRequest('api/notes/public', {}, "GET",{
          _page: this.page,
          _limit: this.limit
        });
        this.posts = [...this.posts, ...new_posts]
        this.page+=1
        new_posts = await this.newsRequest('api/notes', {}, "GET",{
        });
        this.totalPage = Math.ceil(new_posts.length / this.limit)
        this.loading = false
      } catch (error) {
        console.error('AN API ERROR:', error)
      }
    },

  },
  computed: {
    sortedNews(){
      return [...this.posts].sort((post1,post2,)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
  },

  mounted() {
    this.getNews()
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page <= this.totalPage){
        this.getNews()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    //передаем аргумент за которым следим
    observer.observe(this.$refs.observer)

  }
}

</script>

<style scoped>
.observer {
  height: 5px;
  background: rgba(123, 97, 232, 0.99);
}
.app__btns{
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>