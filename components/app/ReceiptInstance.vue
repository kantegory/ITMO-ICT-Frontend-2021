<template>
  <div class="d-flex flex-column">
    <div v-if="!nameEditable">
      <b-link :to="{'name': 'ReceiptInstanceView', params: {id: value.id}}" class="name mr-1">{{ value.name }}</b-link>
      <b-icon-pencil-square @click="nameEditable = true"/>
    </div>
    <div class="d-flex" v-else>
      <b-form-input v-model="nameEditableValue"></b-form-input>
      <b-icon-check class="icon-check" @click="updateName"/>
    </div>
    <span>{{ value.orgName }} (ИНН: {{ value.orgInn }})</span>
    <span v-if="value.orgAddress">{{ value.orgAddress }}</span>

    <span class="mt-4">Список товаров/услуг:</span>
    <b-table hover :items="value.items" :fields="itemsFields">
      <template #cell(price)="data">
        {{ data.item.price / 100 }} руб.
      </template>
      <template #cell(quantity)="data">
        {{ parseFloat(data.item.quantity) }} шт.
      </template>
      <template #cell(sum)="data">
        {{ data.item.sum / 100 }} руб.
      </template>
    </b-table>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import {BIcon, BIconPencilSquare, BIconCheck} from 'bootstrap-vue'

@Component({
  name: 'ReceiptInstance',
  components: {BIcon, BIconPencilSquare, BIconCheck}
})
export default class ReceiptInstance extends Vue {
  @Prop() readonly value !: components['schemas']['Check']

  nameEditable = false
  nameEditableValue = this.value.name

  itemsFields = [
    {key: 'name', label: 'Наименование'},
    {key: 'price', label: 'Цена'},
    {key: 'quantity', label: 'Количество'},
    {key: 'sum', label: 'Сумма'},
  ]

  get date() {
    return new Date(this.value.date).toLocaleDateString()
  }

  updateName() {
    this.nameEditable = false
  }
}
</script>

<style scoped>
.name {
  font-size: 24px;
  font-weight: bold;
}

.icon-check {
  font-size: 24px;
  height: auto;
}
</style>
