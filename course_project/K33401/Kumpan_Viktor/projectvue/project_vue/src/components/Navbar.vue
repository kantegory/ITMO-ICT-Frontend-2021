<template>
<div class="navbar">
<!--  если пользователь авторизован-->
  <div v-if="isAuth"  @click="$router.push('/news')">My News</div>
  <div v-else>My News</div>
  <div class="navbar__btns">
    <my-button v-if="isAuth" style="margin-right: 300px" @click="$router.push('/generation')">Love Topics</my-button>
    <my-button v-if="isAuth" style="margin-right: 300px" @click="$router.push('/news/public')">Go public</my-button>
    <my-button v-if="isAuth" style="margin-right: 50px" @click="$router.push('/profile')">Profile</my-button>
  </div>
  <div v-if="isAuth" @click="logout">Logout</div>
</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import newsRequest from "@/mixins/newsRequest";
import isAuth from "@/mixins/isAuth";

export default {
  components:{
    MyButton
  },
  mixins: [newsRequest, isAuth],
  methods:{
    logout() {
      try {
        this.newsRequest("api/logout", {}, "GET");
        localStorage.removeItem('token')
        this.$router.push('/auth/signin')
      }
      catch (error) {
        console.error('AN API ERROR:', error)
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: #6f44b6;
  box-shadow: 1px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  justify-content: center;
  color: #019b9b;
}
</style>