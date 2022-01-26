<template>
  <b-card class="form-as-card">
    <b-form @submit.prevent="submit">
      <app-form-alert v-if="alert" :errors="alert" />
      <slot />
    </b-form>
  </b-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import { TFormErrors } from "~/types/forms";

@Component({
  name: 'BaseCardForm'
})
export default class BaseCardForm extends Vue {
  @Prop() readonly alert ?: TFormErrors<any>

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
