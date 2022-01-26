<template>
  <form @submit.prevent>
    <h4> </h4>
    <my-input
        v-model="profile.first_name"
        type="text"
        placeholder="first_name"
    />
    <my-input
        v-model="profile.second_name"
        type="text"
        placeholder="second_name"
    />
    <my-input
        v-model="profile.town"
        type="text"
        placeholder="town"
    />
    <my-input
        v-model="profile.age"
        type="text"
        placeholder="age"
    />
    <my-input
        v-model="profile.education"
        type="text"
        placeholder="education"
    />
    <my-input
        v-model="profile.password"
        type="password"
        placeholder="password"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="updateProfile"
    >
      Update!
    </my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";

export default {
  name: "ProfileForm",
  components: {MyButton, MyInput},
  data(){
    return {
      profile: {
        password:"",
        first_name:"",
        second_name:"",
        town:"",
        age:"",
        education:""
      }
    }
  },
  methods: {
    updateProfile(){
      console.log("PUSHTOP")
      this.$emit('create', this.profile)
      this.profile = {
        password:"",
        first_name:"",
        second_name:"",
        town:"",
        age:"",
        education:""
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