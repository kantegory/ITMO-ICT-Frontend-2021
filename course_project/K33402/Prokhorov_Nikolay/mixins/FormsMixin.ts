import { Component, Vue } from "nuxt-property-decorator";
import { TFormErrors } from "~/types/forms";

@Component
export default class FormsMixins extends Vue {
  errorsState<T = any>(error: TFormErrors<T>, key: keyof TFormErrors<T>) {
    return error[key] && (error[key] as string[]).length !== 0 ? false : null
  }

  errorsText<T = any>(error: TFormErrors<T>, key: keyof TFormErrors<T>) {
    return error[key] && (error[key] as string[]).length !== 0 ? (error[key] as string[]).join(', ') : ''
  }

  errorReset<T = any>(error: TFormErrors<T>, key: keyof TFormErrors<T>) {
    (error[key] as string[]) = new Array<string>()
  }
}
