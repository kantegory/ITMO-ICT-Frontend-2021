<template>
  <header/>

  <!-- картинки -->
  <div class="container-fluid" id="imgBg">
    <div class="row axolotls" id="imagesPost">
      <a v-for="(item, i) in axolotls" :key="i"  class=" mb-3 mx-auto" :href="`/image/` + i" >
        <img :src="item" class="axolotl" alt=""/>
      </a>

    </div>
  </div>

  <footer/>

</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import {mapMutations} from "vuex";
export default {
  name: "Images",
  components: {
    header: Header,
    footer: Footer,
  },
  data() {
    return {
    };
  },
  async mounted() {
    this.loadPost("axolotl");
    this.loadPost("salamander");
  },
  methods: {
    ...mapMutations(["loadPost"]),
  },
  computed: {
    axolotls() {
      return this.$store.getters.getAxolotls;
    },
  }
}


</script>

<style scoped>

</style>