export type TLoginForm = {
  username: string | null
  password: string | null
}


export type TSignUpForm = TLoginForm & {
  passwordRepeat: string | null
}

export type TChangeUsernameForm = {
  new_username: string | null
  current_password: string | null
}

export type TChangeEmailForm = {
  email: string | null
}

export type TChangePasswordForm = {
  new_password: string | null
  current_password: string | null
}

export type TBaseFormError = { non_field_errors?: string[] }
export type TFormErrors<T> = { [P in keyof T]?: string[] } & TBaseFormError;

