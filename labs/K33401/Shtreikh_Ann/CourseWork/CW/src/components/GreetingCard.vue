<template>
  <h1 class="Name">
    Добро пожаловать на сайт<span  v-if="username"> {{ username }}</span
    >!
  </h1>
</template>
<script>
export default {
  name: "GreetingCard",

  props: {
    username: String,
  },
};
</script>
 
<style>
.Name {
  padding: 10px;
  
}
.Name span{
  color: #3f57c4bb;
}
</style>
