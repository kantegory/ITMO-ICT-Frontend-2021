<template>
  <loader v-if="loading"/>
  <div v-else-if="posts.length > 0">
    <h3 v-if="public">
      Public posts
    </h3>
    <h3 v-else>
      Self posts
    </h3>
    <transition-group name="post-list">
      <post-item
          v-for="(post,index) in posts"
          :post="post"
          :key="post.id"
          :public="public"
          :index="index+1"
          @remove="delPost"
      />
    </transition-group>
  </div>

  <h4 v-else >
    Post list is empty
  </h4>
</template>

<script>
import PostItem from "@/components/post/PostItem";
import loader from "@/components/UI/Loader";
export default {
  name: "PostList",
  components: {PostItem,loader},
  props: {
    posts: {
      type: Array,
      required: true
    },
    public:{
      type: Boolean,
      required: false
    },
    loading:{
      type: Boolean,
      required: false
    },
  },
  methods:{
    delPost(news){
      this.$emit('remove', news)
    }
  },
}
</script>

<style scoped>

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}

h4{
  text-align: center;
  color: rgba(38, 160, 243, 0.50);

}
h3{
  text-align: center;
}
</style>