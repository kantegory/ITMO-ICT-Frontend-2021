<template>
  <div class="axolotlPhoto__container" v-if="axolotls.length > 0">
    <img class="axolotlPhoto" :src="axolotls[this.$route.params.id]" alt=""/>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Image",
  async mounted() {
    this.loadPost("axolotl");
    this.loadPost("salamander");
  },
  methods: {
    ...mapMutations(["loadPost"]),
  },
  computed: {
    axolotls() {
      console.log(this.$store.getters.getAxolotls)
      return this.$store.getters.getAxolotls;
    },
  }
}
</script>

<style scoped>

</style>