<template>
  <div class="app-alert">
    <b-alert :show="errorsState(errors, 'non_field_errors') === false" variant="warning">
      {{ errorsText(errors, 'non_field_errors') }}
    </b-alert>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop } from 'nuxt-property-decorator'
import { TFormErrors } from "~/types/forms";
import FormsMixin from "~/mixins/FormsMixin";

@Component({
  name: 'FormAlert',
})
export default class FormAlert extends mixins(FormsMixin) {
  @Prop({
    default: () => {
      return {}
    }
  }) readonly errors !: TFormErrors<any>
}
</script>

<style lang="scss">
.app-alert {

}
</style>
