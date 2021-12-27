<template>

  <div class="videoContent">
    <header/>
    <iframe :src="this.allVideos[this.$route.params.id]?.link"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            class="video"
    ></iframe>
    <footer/>
  </div>

</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  name: "Videos",
  components: {
    header: Header,
    footer: Footer
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