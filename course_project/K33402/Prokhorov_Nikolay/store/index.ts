import { Store } from 'vuex/types'
import { getModule } from 'vuex-module-decorators'
import CitiesModule from "~/store/cities";
import ForecastModule from "~/store/forecast";
import { NuxtRuntimeConfig } from "@nuxt/types/config/runtime";
import AuthModule from "~/store/auth";


export class StoreTypescript {
  $config !: NuxtRuntimeConfig

  auth !: AuthModule
  cities !: CitiesModule
  forecast !: ForecastModule

  constructor($store: Store<any>, $config: NuxtRuntimeConfig) {
    this.$config = $config

    this.auth = getModule(AuthModule, $store)
    this.cities = getModule(CitiesModule, $store)
    this.forecast = getModule(ForecastModule, $store)
  }
}
