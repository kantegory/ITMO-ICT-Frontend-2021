<template>
  <div>
    <b-container class="align-self-center d-flex flex-column align-items-center">
      <h2 class="text-center mt-4">Мои чеки</h2>
      <b-link class="underline mb-4" @click="syncReceipts">Синхронизировать</b-link>

      <div class="accordion w-100" role="tablist">
        <receipts-list-item v-for="receipt in receipts" :value="receipt"/>
      </div>
    </b-container>

    <infinite-loading @infinite="infiniteHandler">
      <template #no-more>Нет результатов</template>
    </infinite-loading>
  </div>
</template>


<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import {StateChanger} from 'vue-infinite-loading';
import InfiniteLoading from 'vue-infinite-loading';
import ReceiptsListItem from "~/components/app/ReceiptsListItem.vue";


@Component({
  name: 'ReceiptsListView',
  components: {ReceiptsListItem, InfiniteLoading}
})
export default class ReceiptsListView extends Vue {
  offset = 0
  limit = 15
  receipts: components['schemas']['Check'][] = []

  async syncReceipts() {
    try {
      await this.$axios.post('/checks/sync')
      this.$bvToast.toast('Синхронизация завершена.', {
        title: 'Успешно!',
        variant: 'success',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 5000,
      })
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.$bvToast.toast('Синхронизация завершилась с ошибкой.\n' + error.response.data.detail, {
          title: 'Ошибка!',
          variant: 'danger',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 5000,
        })
      }
    }
  }

  async infiniteHandler($state: StateChanger) {
    try {
      const response = await this.$axios.get('/checks', {params: {offset: this.offset, limit: this.limit}})
      const data = response.data
      if (data.results.length) {
        this.offset += this.limit;
        this.receipts.push(...data.results);
        $state.loaded();
      } else {
        $state.complete();
      }
    } catch (e) {
      $state.loaded();
    }
  }
}
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
