<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand :to="{name: 'Home'}">Прогноз погоды</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!$store.getters.isLogged" :to="{name: 'Registration'}">
              Регистрация
            </b-nav-item>
            <b-nav-item v-if="!$store.getters.isLogged" :to="{name: 'Authorization'}">
              Авторизация
            </b-nav-item>
            <b-nav-item v-else :to="{name: 'Account'}">
              Личный кабинет
            </b-nav-item>
            <b-nav-item v-if="$store.getters.isLogged" @click="logout">
              Выйти
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <main>
      <router-view />
    </main>

  </div>
</template>

<script>
export default {
  created() {
    let token = localStorage.getItem('token')

    if (token) {
      this.$store.commit('updateToken', { token })
    }
  },

  methods: {
    async logout() {
      try {
        const response = await this.axios.post('http://127.0.0.1:8000/auth/token/logout/',
            { 'username': this.username, 'password': this.password },
            {
              headers: {
                'Authorization': `Token ${this.$store.state.token}`
              }
            })

        console.log('success', response)
        this.$store.commit('updateToken', { token: '' })

        await this.$router.push({ name: 'Home' })
      } catch (e) {
        console.log(e)
        console.log(e.response)
      }
    }
  }
}
</script>
