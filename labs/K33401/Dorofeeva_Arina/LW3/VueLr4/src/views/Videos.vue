<template>

  <div class="videoContent">
    <Header/>
    <iframe :src="this.allVideos[this.$route.params.id]?.link"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            class="video"
    ></iframe>
    <Footer/>
  </div>

</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  name: "Videos",
  components: {
    Header,
    Footer
  },
  props: {},
  mounted() {
    this.$store.dispatch("loadVideos")
  },
  computed: {
    allVideos() {
      return this.$store.getters.allVideos;
    }
  },
}
</script>

<style scoped>

</style>
