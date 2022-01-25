<template>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12 rounded-xl">
                     <v-toolbar dense color="cyan darken-4" dark >
                        <v-toolbar-title class="font-weight-medium">LOGIN</v-toolbar-title>
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
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                                    <v-btn class="pa-3 ma-3" dark rounded color="cyan darken-4" elevation="4" to="/">Login</v-btn>
                                    <v-btn class="pa-3 ma-3" rounded plain color="cyan darken-4" elevation="4" to="/registration">Registration</v-btn>
            <!--                         <v-btn @click="clear">
                                          clear
                                    </v-btn> -->
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
         <div class="ma-7 pa-6"></div>
         <Footer />
      </v-main>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Login',
  props: {
    source: String
  },
  components: {
    Footer
  },

  data () {
    return {
      login: '',
      password: ''
    }
  },

  methods: {
    register (event) {
      event.preventDefault()
      // logic
    }
  }
}
</script>
