import { Component, Vue } from "nuxt-property-decorator";
import { TFormErrors } from "~/types/forms";

@Component
export default class FormsMixin extends Vue {
  errorsFromForm<T>(form: T) {
    let errors: TFormErrors<T> = {}
    const keys = Object.keys(form) as (keyof TFormErrors<T>)[]
    keys.forEach(key => {
      // @ts-ignore
      errors[key] = new Array<string>()
    })

    errors.non_field_errors = []

    return errors
  }

  errorsFromResponse<T = any>(errors: TFormErrors<T>, data?: TFormErrors<T>) {
    if (!data) return

    const keys = Object.keys(data) as (keyof TFormErrors<T>)[]
    keys.forEach(key => {
      errors[key] = data[key]
    })

    return errors
  }

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
