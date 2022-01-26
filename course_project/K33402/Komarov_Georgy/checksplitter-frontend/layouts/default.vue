<template>
  <div class="layout layout-default">
    <check-splitter-navbar />

    <main>
      <nuxt />
    </main>

    <check-splitter-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import CheckSplitterNavbar from "~/components/layout/CheckSplitterNavbar/CheckSplitterNavbar.vue";
import CheckSplitterFooter from "~/components/layout/CheckSplitterFooter/CheckSplitterFooter.vue";

@Component({
  components: { CheckSplitterFooter, CheckSplitterNavbar }
})
export default class DefaultLayout extends Vue {

}
</script>

<style lang="scss">
@import "default";
</style>
