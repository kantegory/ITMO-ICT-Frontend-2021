import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { TCitiesStoreData } from "~/types/store";
import { VuexAction } from "nuxt-property-decorator";
import { $axios } from "~/utils/axios";
import axios from "axios";
import useRequests from "~/utils/useRequests";

@Module({
  name: 'cities',
  stateFactory: true,
  namespaced: true,
})
export default class CitiesModule extends VuexModule {
  data: TCitiesStoreData[] = []
  favorites: number[] = []
  search: number[] = []
  error: string = ''

  get isCityInFavorites() {
    return (cityID: number) => this.favorites.includes(cityID)
  }

  get searchedCitiesOnly() {
    return this.data.filter(item => this.search.includes(item.id))
  }

  @Mutation
  setError(error: string) {
    this.error = error
  }

  @Mutation
  addData(data: TCitiesStoreData) {
    this.data.push(data)
  }

  @Mutation
  setData(data: TCitiesStoreData[]) {
    this.data = data
  }

  @Mutation
  addCityFavorite(cityID: number) {
    this.favorites.push(cityID)
  }

  @Mutation
  removeCityFavorite(cityID: number) {
    this.favorites = this.favorites.filter(item => item !== cityID)
  }

  @Mutation
  addCitySearch(cityID: number) {
    this.search.push(cityID)
  }

  @VuexAction({ rawError: true })
  async fetchCity(city: string | null) {
    if (city === null) {
      this.setError('Введите город')
      return
    }

    const filtered: TCitiesStoreData[] = this.data.filter(item => (item.local_names.ru.toLowerCase() === city.toLowerCase()) || (item.query === city.toLowerCase()))

    if (filtered.length !== 0) {
      this.addCitySearch(filtered[0].id)
      return filtered[0]
    }

    let result: TCitiesStoreData | null = null

    let params = new URLSearchParams()
    params.set('q', city)

    try {
      const response = await $axios.get(`/city`, { params })

      if (response.data.length === 0) {
        this.setError(`Не удалось найти указанный город`)
      } else {
        let data: TCitiesStoreData = response.data[0]
        data.query = city.toLowerCase()

        this.addCitySearch(data.id)
        this.addData(data)
        this.setError('')
        result = data
      }
    } catch (e) {
      if (axios.isAxiosError(e)) this.setError(`Не удалось получить данные о городе. Сервер вернул ${e.response?.status}`)
      else {
        this.setError('Неизвестная ошибка!')
        console.error(e)
      }
    }

    return result
  }

  @VuexAction({ rawError: true })
  async favoritesChange(cityID: number) {
    const isAdd = !this.isCityInFavorites(cityID)
    const method = isAdd ? 'post' : 'delete'
    const url = `/city/${cityID}/favorite`

    const result = await useRequests($axios).performRequest(method, url)

    if (result.response) {
      isAdd ? this.addCityFavorite(cityID) : this.removeCityFavorite(cityID)
    } else if (result.fallback) {
      this.setError(`Не удалось ${isAdd ? 'сохранить' : 'удалить'} город. Сервер вернул ${result.fallback.response?.status}`)
    }
  }
}
