<template>
  <div class="card shadow border-0 rounded-3" style="width: 18rem">
    <img :src="imgUrl" alt="" height="225" />

    <div
      class="card-body"
      style="height: 240px"
      :class="!dark ? 'bg-light' : ''"
      :style="dark ? 'background-color: var(--bs-gray-800)' : ''"
    >
      <h5 class="card-title" :class="`text-${dark ? 'light' : 'dark'}`">{{ city }}</h5>
      <p class="card-text" :class="`text-${dark ? 'light' : 'dark'}`">
        {{ description }}
      </p>

      <a
        href="#"
        class="btn city-stay"
        :class="`btn-${dark ? 'light' : 'dark'}`"
        style="font-family: 'Lobster', cursive"
        >Stay.</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    city: String,
    description: String,
    imgUrl: String,
  },
  computed: {
    dark() {
      return this.$store.getters.getDark;
    },
  },
};
</script>

<style scoped>
.city-stay {
  position: absolute;
  bottom: 16px;
}
</style>
