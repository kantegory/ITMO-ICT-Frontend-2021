<template>
  <div class="errorContainer">
    <Header/>
    <div class="error">
      <img src="../assets/error.jpg" class="errorImg" alt=""/>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Header from "../components/Header";
import  Footer from "../components/Footer";
export default {
  name: "Error",
  components: {
    Footer,
    Header
  },
}
</script>

<style scoped>

</style>
