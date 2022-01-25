<template>

</template>


<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import {BIcon, BIconPencilSquare} from 'bootstrap-vue'

@Component({
  name: 'ReceiptInstance',
  components: {BIcon, BIconPencilSquare}
})
export default class ReceiptInstance extends Vue {
  @Prop() readonly value !: components['schemas']['Check']

  nameEditable = false

  get date() {
    return new Date(this.value.date).toLocaleDateString()
  }
}
</script>
