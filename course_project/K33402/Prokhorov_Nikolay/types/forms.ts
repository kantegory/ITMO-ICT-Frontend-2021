export type TLoginForm = {
  username: string | null
  password: string | null
}


export type TSignUpForm = TLoginForm & {
  passwordRepeat: string | null
}


