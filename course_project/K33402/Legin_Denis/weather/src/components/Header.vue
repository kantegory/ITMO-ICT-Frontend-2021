<template>
<nav>
    <v-toolbar class="black">
      <v-toolbar-title>
        <span class="white--text">Прогноз погоды</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          v-for="item in menu"
          :key="item"
          :to="item.link"
          class="mx-2 float-left v-toolbar--flat white--text green darken-4 "
      >
        <span class="font-weight-bold">{{ item.label }}</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    menu: []
  }),
  methods: {
    getMenu () {
      if (this.isLogged()) {
        this.menu = [
          {
            label: 'Личный кабинет',
            link: '/account'
          },
          {
            label: 'Поиск',
            link: '/Search'
          },
          {
            label: 'Выход',
            link: '/logout'
          }
        ]
      } else {
        this.menu = [
          {
            label: 'Вход',
            link: '/login'
          },
          {
            label: 'Регистрация',
            link: '/register'
          }
        ]
      }
      return this.menu
    },
    isLogged () {
      const token = localStorage.getItem('token')
      return !!token
    }
  },
  created () {
    this.getMenu()
    this.$bus.$on('logged', () => {
      this.getMenu()
    })
  }
}
</script>
