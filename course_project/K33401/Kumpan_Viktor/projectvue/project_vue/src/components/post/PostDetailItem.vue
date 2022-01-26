<template>
  <div class="post">
    <div>
      <div v-if="public" style="margin: 20px"><strong>Owner: </strong><p>{{post.owner}}</p></div>
      <div style="margin: 20px"><strong>Title </strong><p>{{post.title}}</p></div>
      <div style="margin: 20px"><strong>Body </strong><p>{{post.body}}</p></div>
      <div style="margin: 20px"><strong>Tags </strong><p>{{post.tags}}</p></div>
      <div v-if="!public" style="margin: 20px"><strong>Public status</strong>
        <div v-if="post.public"> Public</div>
        <div v-else>Private</div>
      </div>
      <div style="margin: 20px" ><strong>Date create</strong><p>{{post.pub_date}}</p></div>
    </div>
    <div v-if="!public">
    <my-button @click="showDialog">
      Update
    </my-button>

    <my-dialog v-model:show="dialogVisible">
      <post-from @create="updatePost"
      />
    </my-dialog>

      <my-button
          @click="$emit('remove')"
      >
        Delete note
      </my-button>
      </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import myDialog from "@/components/UI/MyDialog";
import postFrom from "@/components/post/PostFrom";

export default {
  name: "PostDetailItem",
  components: {MyButton,myDialog,postFrom},
  props:{
    post:{
      type:Object,
      required: true
    },
    public:{
      type:Boolean,
      required:true
    }
  },
  data(){
    return {
      dialogVisible:false,
    }
  },
  methods: {
    showDialog(){
      this.dialogVisible = true
    },
    updatePost(post) {
      this.$emit('update', post)
      this.dialogVisible = false
    }
  }

}
</script>

<style scoped>
.post{
  /*border-radius: 20px;*/
  border: 2px solid teal;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>