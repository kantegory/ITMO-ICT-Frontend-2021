<template>
  <div class="errorContainer">
    <header/>
    <div class="error">
      <img src="../assets/error.jpg" class="errorImg" alt=""/>
    </div>
    <footer/>
  </div>

</template>

<script>
import Header from "../components/Header";
import  Footer from "../components/Footer";
export default {
  name: "Error",
  components: {
    footer: Footer,
    header: Header
  },
}
</script>

<style scoped>

</style>