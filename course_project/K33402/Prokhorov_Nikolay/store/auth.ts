import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

type payload = {
  key: string
  value: any
}

type TUser = {
  id: number
  email: string
  username: string
}

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
})
export default class AuthModule extends VuexModule {
  user: TUser | null = null
  loggedIn: boolean = false

  @Mutation
  SET(payload: payload) {
    if (payload.key === 'user') {
      this.user = payload.value
    } else if (payload.key === 'loggedIn') {
      this.loggedIn = payload.value
    }
  }
}
