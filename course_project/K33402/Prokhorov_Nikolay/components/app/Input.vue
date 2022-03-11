<template>
  <b-form-group
    :label="label"
    :state="errorsState(errors, errorsKey)"
    :invalid-feedback="errorsText(errors, errorsKey)"
  >
    <b-form-input
      v-model="vmodel"
      :type="type"
      :placeholder="placeholder"
      :required="required"
    />

    <slot />
  </b-form-group>
</template>

<script lang="ts">
import { Component, mixins, Prop, VModel, Watch } from 'nuxt-property-decorator'
import { TFormErrors } from "~/types/forms";
import FormsMixin from "~/mixins/FormsMixin";

@Component({
  name: 'AppInput'
})
export default class AppInput extends mixins(FormsMixin) {
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
  @Prop({ type: String, default: 'fieldError' }) readonly errorsKey !: string

  @Watch('vmodel')
  onChange () {
    this.errorReset(this.errors, this.errorsKey)
  }
}
</script>

<style lang="scss">

</style>
