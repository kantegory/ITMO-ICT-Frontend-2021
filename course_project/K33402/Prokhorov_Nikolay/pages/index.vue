<template>
  <b-container class="index-page">
    <h1 class="text-center mt-5">Что там за окном?</h1>
    <h5 class="text-center">SuperWeather - Погода в любой точке мира</h5>

    <div class="d-flex justify-content-center align-items-center position-relative">
      <b-icon-brightness-high />
      <b-icon-cloud-fill />
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconBrightnessHigh } from "bootstrap-vue";
import { BIconCloudFill } from "bootstrap-vue";

export default Vue.extend({
  name: 'IndexPage',
  components: { BIconBrightnessHigh, BIconCloudFill }
})
</script>

<style lang="scss">
.index-page {
  > div {
    min-height: 500px;

    .bi-brightness-high {
      animation: spin 12s ease-in-out infinite;
      width: 300px;
      height: 300px;
    }

    .bi-cloud-fill {
      color: white;
      position: absolute;
      top: auto;
      bottom: 100px;
      z-index: 1;
      width: 150px;
      height: 150px;
      transform: translateX(30px);
      animation: swing ease-in-out 3.5s infinite alternate;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes swing {
  0% {
    transform: rotate(10deg) translateX(30px);
  }

  25% {
    transform: translateX(60px)
  }

  100% {
    transform: rotate(-10deg) translateX(30px);
  }
}
</style>
