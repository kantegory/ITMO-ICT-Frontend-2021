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
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    ></v-text-field>

                    <v-btn
                    color="primary"
                    class="mr-4"
                    @click="login"
                    >
                    Sign in
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const data = {
        username: this.name,
        password: this.password
      }

      this.$store.dispatch('login', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
