<template>
  <b-card no-body>
    <b-card-header header-tag="header" class="p-3 bg-transparent" role="tab" v-b-toggle="`accordion-${value.id}`">
      <b-row cols="1" cols-md="4">
        <b-col md="4" class="font-weight-bold">{{ value.name }}</b-col>
        <b-col md="4" class="font-weight-light">{{ value.address }}</b-col>
        <b-col md="2" class="font-weight-bold text-right">{{ value.totalSum / 100 }} руб.</b-col>
        <b-col md="2" class="font-weight-light text-right">{{ date }}</b-col>
      </b-row>
    </b-card-header>
    <b-collapse :id="`accordion-${value.id}`" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <receipt-instance :value="value"/>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import ReceiptInstance from "~/components/app/ReceiptInstance.vue";

@Component({
  name: 'ReceiptsListHeader',
  components: {ReceiptInstance}
})
export default class ReceiptsListHeader extends Vue {
  @Prop() readonly value !: components['schemas']['Check']

  get date() {
    return new Date(this.value.date).toLocaleDateString()
  }
}
</script>
