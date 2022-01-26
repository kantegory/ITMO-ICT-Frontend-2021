<template>
  <div class="d-flex flex-column">
    <div v-if="!nameEditing">
      <b-link :to="{'name': 'ReceiptInstanceView', params: {id: value.id}}" class="name mr-1">{{ nameValue }}</b-link>
      <b-icon-pencil-square v-if="nameEditable" @click="nameEditing = true"/>
    </div>
    <b-form v-else class="d-flex" @submit.prevent="updateName">
      <b-form-input v-model="nameValue"></b-form-input>
      <b-icon-check class="icon-check" @submit/>
    </b-form>
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
  @Prop({type: Boolean, default: false}) readonly nameEditable !: boolean
  @Prop() readonly value !: components['schemas']['Check']

  nameEditing = false
  nameValue = this.value.name

  itemsFields = [
    {key: 'name', label: 'Наименование'},
    {key: 'price', label: 'Цена'},
    {key: 'quantity', label: 'Количество'},
    {key: 'sum', label: 'Сумма'},
  ]

  get date() {
    return new Date(this.value.date).toLocaleDateString()
  }

  async updateName() {
    this.nameEditing = false
    try {
      await this.$axios.patch(`/checks/${this.value.id}/name`, {name: this.nameValue})
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.$bvToast.toast('Что-то прошло не так.', {
          title: 'Ошибка!',
          variant: 'danger',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 5000,
        })
      }
    }
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
