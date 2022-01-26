<template>
    <section>
        <v-row>
        <v-col cols="10" class="mx-auto my-6">
            <v-card
            elevation="2"
            class="mx-auto my-6">
                <v-form
                    ref="form"
                    class="pa-md-4 mx-lg-auto"
                >
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="password_confirmation"
                    label="Password confirmation"
                    type="password"
                    required
                    ></v-text-field>

                    <v-btn
                    color="primary"
                    class="mr-4"
                    @click="register"
                    >
                    Sign up
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    register: function () {
      const data = {
        username: this.name,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('register', data)
        .then(() => this.$router.push('/login'))
        .catch(err => console.log(err))
    }
  }
}
</script>
