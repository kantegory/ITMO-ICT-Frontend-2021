<template>
<div>
  <my-button class="create__btn" @click="showDialog">
    Create post
  </my-button>

  <my-select class="select__man"
      v-model="selectedSort"
      :options="sortOption"
  />

  <my-dialog v-model:show="dialogVisible">
    <post-from @create="CreatePost"
    />
  </my-dialog>
<post-list
:posts="sortedNews"
:loading="loading"
@remove="removePost"
>
</post-list>
  <div ref="observer" class="observer"></div>
</div>
</template>



<script>
import Loader from "@/components/UI/Loader";
import PostList from "@/components/post/PostList";
import MyButton from "@/components/UI/MyButton";
import PostFrom from "@/components/post/PostFrom";
import MyDialog from "@/components/UI/MyDialog";
import newsRequest from "@/mixins/newsRequest";
import MySelect from "@/components/UI/MySelect";

export default {
  name: "MainPage",
  components: {
    MySelect, PostFrom, MyButton,Loader,
    PostList,MyDialog},
  mixins: [ newsRequest ],
  data() {
    return {
      delPost:false,
      dialogVisible: false,
      posts: [],
      loading:true,
      totalPage:0,
      page:1,
      limit:10,
      selectedSort:'',
      sortOption:[
        {value:'title', name: "Sort by title"},
        {value:'body',name: "Sort by body"},
      ]
    }
  },
  methods: {
    CreatePost(event){
      const response = this.newsRequest('api/notes/new', event, "POST")
      this.posts.push(event)
      this.dialogVisible = false
    },
    showDialog(){
      this.dialogVisible = true
    },
    async getNews () {
      try {
        console.log(this.page)
        let new_posts = await this.newsRequest('api/notes', {}, "GET",{
            _page: this.page,
            _limit:this.limit
        });
        this.loading = false
        this.posts = [...this.posts, ...new_posts]
        this.page+=1
        new_posts = await this.newsRequest('api/notes', {}, "GET",{
        });
        this.totalPage = Math.ceil(new_posts.length / this.limit)
      } catch (error) {
        console.error('AN API ERROR:', error)
      }
    },
    removePost(post){
      const response = this.newsRequest(`api/notes/delete/${post.id}`, {}, "DELETE",{})
      this.posts = this.posts.filter(t => t.id !== post.id)
    },
  },
  computed: {
    sortedNews(){
      return [...this.posts].sort((post1,post2,)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
  },

  mounted() {
    this.getNews();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if ((entries[0].isIntersecting) && (this.page <= this.totalPage)) {
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
.create__btn{
  display: flex;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 20%;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(111, 68, 182, 0.85);
}
.select__man{

}
</style>