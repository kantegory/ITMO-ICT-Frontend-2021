import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { TCitiesStoreData } from "~/types/store";
import { VuexAction } from "nuxt-property-decorator";
import { $axios } from "~/utils/axios";

@Module({
  name: 'cities',
  stateFactory: true,
  namespaced: true,
})
export default class CitiesModule extends VuexModule {
  data: TCitiesStoreData[] = []
  error: string = ''
  apikey: string = ''

  @Mutation
  setApiKey(key: string) {
    this.apikey = key
  }

  @Mutation
  setError(error: string) {
    this.error = error
  }

  @Mutation
  addData(data: TCitiesStoreData) {
    this.data.push(data)
  }

  @VuexAction({ rawError: true })
  async fetchCity(city: string | null) {
    if (city === null) {
      this.setError('Введите город')
      return
    }

    const filtered = this.data.filter(item => (item.local_names.ru.toLowerCase() === city.toLowerCase()) || (item.query === city.toLowerCase()))

    if (filtered.length !== 0) {
      return filtered[0]
    }

    let result: TCitiesStoreData | null = null

    let params = new URLSearchParams()
    params.set('q', city)
    params.set('appid', this.apikey)

    await $axios.get(`https://api.openweathermap.org/geo/1.0/direct`, { params })
      .then(response => {
        if (response.data.length === 0) {
          this.setError(`Не удалось найти указанный город`)
        } else {
          let data: TCitiesStoreData = response.data[0]
          data.query = city.toLowerCase()

          // FIX check for duplicate
          this.addData(data)
          this.setError('')
          result = data
        }
      })
      .catch(error => {
        this.setError(`Не удалось получить данные о городе. Сервер вернул ${error.response.status}`)
      })

    return result
  }
}
