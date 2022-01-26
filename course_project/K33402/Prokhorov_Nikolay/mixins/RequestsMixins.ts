import { Component, Vue } from "nuxt-property-decorator";
import { AxiosError, AxiosResponse, Method } from "axios";
import { TBaseFormError } from "~/types/forms";

@Component
export default class RequestsMixins extends Vue {
  async request<T = any>(method: Method) {
    let response: AxiosResponse<T> | null = null
    let fallback: AxiosError<TBaseFormError> | null = null
    let error: unknown = null

    try {
      response = await this.$axios.request({ method })
    } catch (e) {
      if (this.$axios.isAxiosError(e)) fallback = e
      else error = e
    }

    return { response, fallback, error }
  }
}
