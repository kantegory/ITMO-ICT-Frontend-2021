import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { VuexAction } from "nuxt-property-decorator";
import { TCitiesStoreData, TForecastStoreData } from "~/types/store";
import { $axios } from "~/utils/axios";
import useRequests from "~/utils/useRequests";

@Module({
  name: 'forecast',
  stateFactory: true,
  namespaced: true,
})
export default class ForecastModule extends VuexModule {
  data: TForecastStoreData[] = []
  error: string = ''

  @Mutation
  setError(error: string) {
    this.error = error
  }

  @Mutation
  addData(data: TForecastStoreData) {
    this.data.push(data)
  }

  @Mutation
  setData(data: TForecastStoreData[]) {
    this.data = data
  }

  @VuexAction({ rawError: true })
  async fetchForecast(cityData: TCitiesStoreData) {
    let result: TForecastStoreData | null = null

    let filtered: TForecastStoreData[] = this.data.filter(forecast => forecast.city.id === cityData.id)
    if (filtered.length !== 0) return filtered[0]

    const respresult = await useRequests($axios).performRequest('get', `/city/${cityData.id}/forecast`)

    if (respresult.response) {
      result = respresult.response.data[0] as TForecastStoreData
      result.city = cityData
      this.setError('')
      this.addData(result)
    } else if (respresult.fallback) {
      this.setError(`Не удалось получить прогноз погоды для города ${cityData.local_names.ru}. Сервер вернул ${respresult.fallback.response?.status}`)
    }

    return result
  }
}
