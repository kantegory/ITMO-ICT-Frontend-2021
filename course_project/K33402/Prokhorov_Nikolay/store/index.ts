import { Store } from 'vuex/types'
import { getModule } from 'vuex-module-decorators'
import CitiesModule from "~/store/cities";
import ForecastModule from "~/store/forecast";
import { NuxtRuntimeConfig } from "@nuxt/types/config/runtime";


export class StoreTypescript {
  $config !: NuxtRuntimeConfig

  cities !: CitiesModule
  forecast !: ForecastModule

  constructor ($store: Store<any>, $config: NuxtRuntimeConfig) {
    this.$config = $config

    this.cities = getModule(CitiesModule, $store)
    this.forecast = getModule(ForecastModule, $store)

    this.cities.setApiKey($config.API_KEY)
    this.forecast.setApiKey($config.API_KEY)
  }
}
