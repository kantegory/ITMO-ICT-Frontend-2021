import { OnecallResponse } from "~/types/onecall";

export type TCitiesStoreData = {
  id: number
  country: string
  lat: number
  local_names: { [key: string]: string } & { ru: string }
  lon: number
  name: string
  state: string

  query: string
}

export type TForecastStoreData = OnecallResponse & {
  city: TCitiesStoreData
}


export type TFavoritesStoreData = {
  city: number
  city_info: TCitiesStoreData,
  city_weather: TForecastStoreData[]
}
