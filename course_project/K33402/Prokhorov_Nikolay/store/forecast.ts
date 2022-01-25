import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { VuexAction } from "nuxt-property-decorator";
import { TCitiesStoreData, TForecastStoreData } from "~/types/store";
import { $axios } from "~/utils/axios";

@Module({
  name: 'forecast',
  stateFactory: true,
  namespaced: true,
})
export default class ForecastModule extends VuexModule {
  data: TForecastStoreData[] = []
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
  addData(data: TForecastStoreData) {
    this.data.push(data)
  }

  @VuexAction({ rawError: true })
  async fetchForecast(cityData: TCitiesStoreData) {
    let result: TForecastStoreData | null = null

    let params = new URLSearchParams()
    params.append('lat', cityData.lat.toString())
    params.append('lon', cityData.lon.toString())
    params.append('units', 'metric')
    params.append('appid', this.apikey)

    await $axios.get(`https://api.openweathermap.org/data/2.5/onecall`, { params })
      .then(response => {
        console.log(response)

        result = response.data as TForecastStoreData
        result.city = cityData
        this.setError('')
        this.addData(result)
      })
      .catch(error => {
        this.setError(`Не удалось получить прогноз погоды для города ${cityData.local_names.ru}. Сервер вернул ${error.response.status}`)
      })

    return result
  }
}
