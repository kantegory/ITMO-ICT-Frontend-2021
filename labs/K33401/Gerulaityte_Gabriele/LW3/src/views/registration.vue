<template>
        <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                <v-form @submit="register">
                  <v-card class="elevation-12 rounded-xl">
                     <v-toolbar color="cyan darken-4" dark >
                        <v-toolbar-title class="font-weight-medium">REGISTRATION</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              v-model="login"
                              name="login"
                              label="Login"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              v-model="password"
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              :rules="passwordRules"
                           ></v-text-field>
                           <v-text-field
                              v-model="repeatPassword"
                              id="repeatPassword"
                              name="repeatPassword"
                              label="Repeat Password"
                              type="password"
                              :rules="confirmPasswordRules"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn class="pa-3 ma-3" dark rounded color="cyan darken-4" elevation="4" to="/adress" >Sign me up!</v-btn>
                        <v-btn rounded plain color="cyan darken-4" elevation="4" @click="clear">
                              clear
                        </v-btn>
                     </v-card-actions>
                  </v-card>
                </v-form>
               </v-flex>
            </v-layout>
         </v-container>
         <div class="ma-4 pa-5"></div>
         <Footer />
      </v-main>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Registration',
  props: {
    source: String
  },

  components: {
    Footer
  },

  data () {
    return {
      login: '',
      password: '',
      repeatPassword: '',
      passwordRules: [
        value => !!value || 'Please type password.',
        value => (value && value.length >= 6) || 'minimum 6 characters'
      ],
      confirmPasswordRules: [
        value => !!value || 'type confirm password',
        value =>
          value === this.password || 'The password confirmation does not match.'
      ]
    }
  },

  methods: {
    register (event) {
      event.preventDefault()
      // logic
    },
    clear () {
      this.login = ''
      this.password = ''
      this.repeatPassword = ''
      this.$refs.observer.reset()
    }
  } /*
  computed: {
    passwordMatch() {
      return () =>
        this.password === this.repeatPassword || "Password must match";
    }
  } */
}
</script>
