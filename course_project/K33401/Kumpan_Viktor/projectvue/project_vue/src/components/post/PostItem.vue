<template>
<div class="post">
  <div>
    <div><b>{{index}}</b></div>
    <div v-if="public" ><strong>Owner:</strong>
      <router-link :to="{ path: `/profile/${post.owner}` }"> {{post.owner}}</router-link>
    </div>
    <div><strong>Title:</strong>{{post.title}}</div>
    <div><strong>Body:</strong>{{post.body}}</div>
    <div><strong>Tags:</strong>{{post.tags}}</div>
  </div>
  <div class="post__btns" >
    <my-button v-if="!public"
    @click="$router.push(`/news/${post.id}/`)"
    >
      Open note
    </my-button>
    <my-button v-else @click="$router.push(`/news/public/${post.id}/`)">
      Open note
      </my-button>
    <my-button v-if="!public"
        @click="$emit('remove', post)"
    >
      Delete note
    </my-button>
  </div>
</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "PostItem",
  components: {MyButton},
  props:{
    post:{
      type:Object,
      required: true
    },
    public:{
      type: Boolean,
      required: false
    },
    index:{
    }
  },
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>