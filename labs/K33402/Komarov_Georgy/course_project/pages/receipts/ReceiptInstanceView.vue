<template>
  <b-container>
    <receipt-instance v-if="receipt" :value="receipt" name-editable class="mt-4"/>
  </b-container>
</template>


<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import ReceiptInstance from "~/components/app/ReceiptInstance.vue";


@Component({
  name: 'ReceiptInstanceView',
  components: {ReceiptInstance}
})
export default class ReceiptInstanceView extends Vue {
  offset = 0
  limit = 15
  receipt: components['schemas']['Check'] | null = null

  async fetch() {
    try {
      const response = await this.$axios.get(`/checks/${this.$route.params.id}`)
      this.receipt = response.data
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.$bvToast.toast('Что-то пошло не так.', {
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
