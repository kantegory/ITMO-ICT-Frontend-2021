<template>
  <b-form-group
    :label="label"
    :state="errorsState(errors, errorKey)"
    :invalid-feedback="errorsText(errors, errorKey)"
  >
    <b-form-input
      v-model="vmodel"
      :placeholder="placeholder"
      :required="required"
      @change="errorReset(errors, errorKey)"
    />
  </b-form-group>
</template>

<script lang="ts">
import { Component, mixins, Prop, VModel } from 'nuxt-property-decorator'
import { TFormErrors } from "~/types/forms";
import FormsMixins from "~/mixins/FormsMixin";

@Component({
  name: 'Input'
})
export default class Input extends mixins(FormsMixins) {
  @VModel({ required: true })
  vmodel !: string | number | null


  @Prop() readonly label ?: string
  @Prop() readonly placeholder ?: string

  @Prop({ type: String, default: 'text' }) readonly type !: string
  @Prop({ type: Boolean, default: false }) readonly required !: boolean

  @Prop({
    default: () => {
      return {}
    }
  }) readonly errors !: TFormErrors<any>
  @Prop({ type: String, default: 'fieldError' }) readonly errorKey !: string

}
</script>

<style lang="scss">

</style>
