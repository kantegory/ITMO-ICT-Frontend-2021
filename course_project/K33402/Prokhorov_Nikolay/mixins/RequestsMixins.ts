import { Component, Vue } from "nuxt-property-decorator";
import { AxiosError, AxiosResponse, Method } from "axios";
import { TBaseFormError } from "~/types/forms";
import { StringKeys } from "~/types/base";
import axios from "axios";

@Component
export default class RequestsMixins extends Vue {
  async request<T = any>(method: Method, url: string, data: StringKeys<any>) {
    let response: AxiosResponse<T> | null = null
    let fallback: AxiosError<TBaseFormError> | null = null
    let error: unknown = null

    try {
      response = await this.$axios.request({ method, url, data })
    } catch (e) {
      if (axios.isAxiosError(e)) fallback = e
      else {
        error = e
        console.error(`Unknown error on ${method} to ${url}: ${e}`)
      }
    }

    return { response, fallback, error }
  }
}
