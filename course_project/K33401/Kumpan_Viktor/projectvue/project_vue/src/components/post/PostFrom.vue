<template>
  <form @submit.prevent>
    <h4> Create post </h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Title..."
        />
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Description..."
        />
    <my-input
        v-model="post.tags"
        type="text"
        placeholder="Tag..."
    />
    <label>
    <input style="margin: 10px 0 5px 0"
        v-model="post.public"
        type="checkbox"
    />
      Public status
      </label>
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
        >
      Create!
    </my-button>
    </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
export default {
  name: "PostFrom",
  components: {MyButton, MyInput},
  data(){
    return {
      post: {
        title: '',
        body: '',
        tags: '',
        public:'',
        owner:'',
      }
    }
  },
  methods: {
    createPost(){
      // this.post.id = Date.now()%100
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
        tags: '',
        public:'',
      }
    }
  }

}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

</style>