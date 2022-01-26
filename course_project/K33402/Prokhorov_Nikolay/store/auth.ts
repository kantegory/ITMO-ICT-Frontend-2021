import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface payload {
  key: string
  value: any
}

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
})
export default class AuthModule extends VuexModule {
  user: any = null
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
