<template>
  <b-card class="form-as-card">
    <b-form @submit.prevent="submit">
      <slot />
    </b-form>
  </b-card>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'BaseCardForm'
})
export default class BaseCardForm extends Vue {

  @Emit()
  submit() {
  }
}
</script>

<style lang="scss">
.form-as-card {
  width: 100%;
  max-width: 400px;
  margin-top: 20vh;

  @include media-breakpoint-up(sm) {
    width: unset;
    min-width: 400px;
  }
}
</style>
