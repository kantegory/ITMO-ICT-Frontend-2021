<template>
  <div class="container">
    <div class="pt-3 d-flex justify-content-center">
      <h2 class="head-text">Сохраненные города</h2>
    </div>
    <div class="v-city_list" v-if="this.$store.state.infos.length > 0">
      <City
        v-for="info in this.$store.state.infos"
        :key="info.id"
        :info="info"
        :id="info.id"
      />
    </div>
    <div class="mt-3 no_cities" v-else-if="this.$store.state.infos.length === 0">
      <p class="head-text">Что-то тут пусто :(</p>
      <p class="head-text">Чтобы добавить новые города - перейдите во вкладку "Поиск"</p>
    </div>
  </div>
</template>

<script>
import City from './City.vue'
import { mapActions } from 'vuex'
export default {
  components: { City },
  name: 'Account',
  data: () => ({
    info: {
      name: ''
    },
    id: '',
    mainID: ''
  }),
  methods: {
    ...mapActions([
      'GET_INFOS_FROM_API',
      'GET_CITY_IDS',
      'GET_CITY_MAIN_IDS'
    ])
  },
  mounted () {
    this.GET_INFOS_FROM_API()
    this.GET_CITY_IDS()
    this.GET_CITY_MAIN_IDS()
  }
}
</script>
