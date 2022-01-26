<template>

  <div class="profile">
    <div v-if="selfprofile">
      <div style="margin: 20px" ><strong>Email</strong><p>{{prof.email}}</p></div>
      <div style="margin: 20px" ><strong>Username</strong><p>{{prof.username}}</p></div>
      <div style="margin: 20px" ><strong>First name</strong><p>{{prof.first_name}}</p></div>
      <div style="margin: 20px" ><strong>Second name</strong><p>{{prof.second_name}}</p></div>
      <div style="margin: 20px" ><strong>Town</strong><p>{{prof.town}}</p></div>
      <div style="margin: 20px" ><strong>Age</strong><p>{{prof.age}}</p></div>
      <div style="margin: 20px" ><strong>Education </strong><p>{{prof.education}}</p></div>
    </div>
    <div v-else>
      <div style="margin: 20px" ><strong>Username</strong><p>{{prof.username}}</p></div>
      <div style="margin: 20px" ><strong>First name</strong><p>{{prof.first_name}}</p></div>
      <div style="margin: 20px" ><strong>Town</strong><p>{{prof.town}}</p></div>
      <div style="margin: 20px" ><strong>Age</strong><p>{{prof.age}}</p></div>
      <div style="margin: 20px" ><strong>Education</strong><p>{{prof.education}}</p></div>
    </div>
    <my-button v-if="isSelfProfile" @click="$emit('dialog')">
      Update profile
    </my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import isSelfProfile from "@/mixins/isAuth";


export default {
  name: "ProfileItem",
  components: {MyButton},
  mixins: [isSelfProfile],
  props:{
    prof:{
      type:Object,
      required:true,
    },
    selfprofile:{
      type:Boolean,
      required:true,
    }
  }
}
</script>

<style scoped>
.profile{
  /*border-radius: 20px;*/
  border: 2px solid teal;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>