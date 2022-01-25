<template>
<div>
<navigationPanel />
<h3 class="font-weight-medium text-center teal--text pa-4">Сброс пароля</h3>
<v-content>
      <v-container grid-list-xl>
  <v-layout row justify-center>
        <v-card class="elevation-4 rounded-xl">
          <!-- Stepper -->
          <v-stepper v-model="step" class="elevation-0">
            <!-- Stepper Header -->
            <v-stepper-header class="elevation-0">
              <v-stepper-step color="cyan darken-3" :complete="step > 1" step="1">Шаг 1</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="cyan darken-3" :complete="step > 2" step="2">Шаг 2</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="cyan darken-3" :complete="step > 3" step="3">Шаг 3</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step color="cyan darken-3" step="4">Готово</v-stepper-step>
            </v-stepper-header>

            <v-divider></v-divider>

            <v-stepper-items class="stepper-scrollable-content">
              <v-stepper-content step="1">
                <v-form ref="form" v-model="valid" lazy-validation>
   <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  Для сброса пароля введите свой e-mail
                  <v-text-field label="Email*" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
                </v-form>
                <v-btn class="ma-2 pa-2" dark rounded color="cyan darken-3" @click="step = 2">дальше</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                  <v-form ref="form" v-model="valid" lazy-validation>
   <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  Введите код, полученный на e-mail
                  <v-otp-input class="ma-auto position-relative" style="max-width: 300px" length="4" type="number"></v-otp-input>
                </v-flex>
              </v-layout>
            </v-container>
                </v-form>
            <v-card-actions>
            <v-btn class="ma-2 pa-2" dark rounded color="cyan darken-3" @click="step = 3">дальше</v-btn>
            <v-btn class="ma-2 pa-2" rounded plain elevation="4" color="cyan darken-4" @click="step = 1">назад</v-btn>
            </v-card-actions>
              </v-stepper-content>
              <v-stepper-content step="3">
                  <v-form ref="form" v-model="valid" lazy-validation>
   <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  Введите ваш новый пароль:
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
                    :rules="confirmPasswordRules"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
                </v-form>
            <v-btn class="ma-2 pa-2" dark rounded color="cyan darken-3" @click="step = 4">дальше</v-btn>
            <v-btn class="ma-2 pa-2" rounded plain elevation="4" color="cyan darken-4" @click="step = 1">назад</v-btn>
              </v-stepper-content>

              <v-stepper-content step="4">
                  <p class="font-weight-medium text-center teal--text pa-4">Ваш пароль был изменён!</p>
                  <div class="text-center">
                  <v-btn class="ma-2 pa-2" rounded plain elevation="4" color="cyan darken-4" @click="step = 1">готово</v-btn>
                  </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>

        </v-card>
    </v-layout>
      </v-container>
    </v-content>
    <div class="ma-8 pa-8"></div>
  <Footer />
</div>
</template>

<script>
import navigationPanel from '../components/navigationPanel'
import Footer from '../components/Footer'

export default {
  name: 'passwordReset',

  components: {
    Footer,
    navigationPanel
  },
  data () {
    return {
      dialog: true,
      step: 1,
      valid: true,
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
  }
}
</script>
<style>
.stepper-scrollable-content {
  overflow: auto;
  max-height: calc(100% - 71px);
}
.v-card {
  max-height: 400px;
}
.position-relative {
  position: relative;
}
</style>
