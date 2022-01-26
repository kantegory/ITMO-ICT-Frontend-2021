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


    await $axios.get(`/city/${cityData.id}/forecast`)
      .then(response => {
        console.log(response)

        result = response.data[0] as TForecastStoreData
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
