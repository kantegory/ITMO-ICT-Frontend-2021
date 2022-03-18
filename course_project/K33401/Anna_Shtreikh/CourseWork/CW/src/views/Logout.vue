<template>
  <v-col>
    <h2>Вы вышли с сайта.</h2>
        <v-img
          :src="require('../assets/boy.jpg')"
          class="my-0"
          contain
          height="200"
        />
    <v-btn color="accent" class="mb-3 mr-3" @click="$router.push(`/log/`)"
          >Войти</v-btn
        >
    
  </v-col>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    LogOut () {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          this.axios.defaults.headers.common.Authorization = `token ${token}`
        }
        this.axios
          .post('http://127.0.0.1:8000/auth/token/logout/')
          .then(response => {
            localStorage.removeItem('token')
            this.$router.push('/log/')
          })
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  },
  created () {
    this.LogOut()
  }
}
</script>