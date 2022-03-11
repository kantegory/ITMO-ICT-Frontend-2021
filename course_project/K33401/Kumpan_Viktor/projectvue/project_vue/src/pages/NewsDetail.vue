 <template>
       <post-detail-item :post="post"
                         :key="post.id"
                         :public="isPublic"
                          @remove="removePost"
                          @update="updatePost"
       />
 </template>

<script>

import PostDetailItem from "@/components/post/PostDetailItem";
import myButton from "@/components/UI/MyButton";
import newsRequest from "@/mixins/newsRequest";

export default {
  name: "NewsDetail",
  components: {myButton, PostDetailItem},
  mixins: [newsRequest],

  data(){
    return {
      post: {
        owner:'',
        title: '',
        body: '',
        tags: '',
        public: false,
        pub_date:'',
      },
      public: false,
    }
  },
  methods:{
    updatePost(post){
      if (post.public === ''){
        post.public = false
      }
      this.post = newsRequest.methods.reload_data(post,this.post)
      const response = this.newsRequest(`api/notes/${this.$route.params.id}/edit`, post, "PUT")
    },
    removePost() {
      const response = this.newsRequest(`api/notes/delete/${this.$route.params.id}`, {}, "DELETE")
      this.$router.push(`/news/`)
    },
    async getNews (publ) {
      try {
        let data;
        if (publ){
          data = await this.newsRequest(`api/notes/public/${this.$route.params.id}`, {}, "GET");
        }else{
          data = await this.newsRequest(`api/notes/${this.$route.params.id}`, {}, "GET");
        }
        this.post = data[0]
      } catch (error) {
        console.error('AN API ERROR:', error)
      }
    },
  },
  computed:{
    isPublic(){
      return this.$route.fullPath.includes("public")
    }
  },
  mounted() {
      this.getNews(this.isPublic)
  }
}
</script>

<style scoped>

</style>