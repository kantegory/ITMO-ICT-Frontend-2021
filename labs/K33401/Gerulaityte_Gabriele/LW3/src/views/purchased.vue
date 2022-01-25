<template>
    <div>
        <navigationPanel />
        <h3 class="font-weight-medium text-center teal--text pt-4">Ваши заказы</h3>
        <div class="ma-3 pa-2">
          <v-stepper
          value="2"
          class="mt-12 rounded-xl"
          >
          <p class="font-weight-medium text-center teal--text mt-3">Заказ: "Серёжки месяц", трек-номер: RU123456789UU</p>
            <v-stepper-header>
              <v-stepper-step
              step="1"
              complete
              color="cyan darken-3"
              >
                Подготовлен
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="2" color="cyan darken-3">
                В пути
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">
                Выполнен
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
        <div class="ma-16 pa-16"></div>
        <div class="ma-5 pa-5"></div>
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer'
import navigationPanel from '../components/navigationPanel'

export default {
  name: 'purchased',

  components: {
    Footer,
    navigationPanel
  }
}
</script>
