export type TLoginForm = {
  username: string | null
  password: string | null
}


export type TSignUpForm = TLoginForm & {
  passwordRepeat: string | null
}

export type TBaseFormError = { non_field_errors?: string[] }
export type TFormErrors<T> = { [P in keyof T]?: string[] } & TBaseFormError;

