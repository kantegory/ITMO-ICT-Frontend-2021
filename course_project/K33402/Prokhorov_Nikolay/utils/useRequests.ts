import axios, { AxiosError, AxiosResponse, Method } from "axios";
import { StringKeys } from "~/types/base";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

export default function useRequests($axios: NuxtAxiosInstance) {
  const performRequest = async <T = any>(method: Method, url: string, data?: StringKeys<any>) => {
    let response: AxiosResponse<T> | null = null
    let fallback: AxiosError<any> | null = null
    let error: unknown = null

    try {
      response = await $axios.request({ method, url, data })
    } catch (e) {
      if (axios.isAxiosError(e)) fallback = e
      else {
        error = e
        console.error(`Unknown error on ${method} to ${url}: ${e}`)
      }
    }

    return { response, fallback, error }
  }

  return { performRequest }
}

