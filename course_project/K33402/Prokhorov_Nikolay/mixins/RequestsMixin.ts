import { Component, Vue } from "nuxt-property-decorator";
import { Method } from "axios";
import { StringKeys } from "~/types/base";
import useRequests from "~/utils/useRequests";


@Component
export default class RequestsMixin extends Vue {
  async request<T = any>(method: Method, url: string, data: StringKeys<any>) {
    return useRequests(this.$axios).performRequest(method, url, data)
  }
}
