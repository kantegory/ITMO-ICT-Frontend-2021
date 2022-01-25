<template>
  <b-container>
    <h1 class="mt-4 text-center">Редактирование профиля</h1>

    <div class="auth-card-wrapper mt-5">
      <b-form class="auth-card" @submit.prevent="submitEmail">
        <b-form-group label="Редактирование Email" class="mb-2"
                      :state="!(errors.email && errors.email.length !== 0)"
                      :invalid-feedback="errors.email ? errors.email.join(', ') : ''">
          <b-form-input placeholder="Введите email" type="email" v-model="email" required />
        </b-form-group>

        <b-button class="w-100" type="submit">
          Сохранить
        </b-button>
      </b-form>

      <b-form class="auth-card mt-5 " @submit.prevent="submitUsername">
        <b-form-group label="Редактирование имени пользователя" class="mb-2"
                      :state="!(errors.new_username && errors.new_username.length !== 0)"
                      :invalid-feedback="errors.new_username ? errors.new_username.join(', ') : ''">
          <b-form-input placeholder="Введите username" v-model="username" required />
        </b-form-group>

        <b-form-group label="Необходимо ввести текущий пароль" class="mb-2"
                      :state="!(errors.current_password && errors.current_password.length !== 0)"
                      :invalid-feedback="errors.current_password ? errors.current_password.join(', ') : ''">
          <b-form-input placeholder="Введите свой пароль" type="password" v-model="password" required />
        </b-form-group>

        <b-button class="w-100" type="submit">
          Сохранить
        </b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      errors: []
    }
  },

  async mounted() {
    if (!this.$store.getters.isLogged) {
      await this.$router.push({ name: 'Authorization' })
    }

    try {
      const response = await this.axios.get(`http://127.0.0.1:8000/auth/users/me/`, {
        headers: {
          'Authorization': `Token ${this.$store.state.token}`
        }
      })

      if (response) {
        this.$store.commit('updateUserInfo', { username: response.data.username, email: response.data.email })
      }

    } catch (e) {
      console.log('error', e)
    }

    this.email = this.$store.state.email
  },

  methods: {
    async submitEmail() {
      try {
        const response = await this.axios.put(`http://127.0.0.1:8000/auth/users/me/`, { email: this.email }, {
          headers: {
            'Authorization': `Token ${this.$store.state.token}`
          }
        })

        if (response) {
          this.commit('updateUserInfo', { email: this.email })
        }
      } catch (e) {
        console.log('error', e)

        if (e.response.data) {
          this.errors = e.response.data
        }
      }
    },

    async submitUsername() {
      try {
        const response = await this.axios.post(`http://127.0.0.1:8000/auth/users/set_username/`, {
          current_password: this.password,
          new_username: this.username
        }, {
          headers: {
            'Authorization': `Token ${this.$store.state.token}`
          }
        })

        if (response) {
          this.commit('updateUserInfo', { username: this.username })
        }
      } catch (e) {
        console.log('error', e)

        if (e.response.data) {
          this.errors = e.response.data
        }
      }
    }
  }
}
</script>
