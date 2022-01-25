<template>
    <div id='shop'>
        <div class="pa-6 col-12 text-center">
            <a class="flw" href="/"><h2 class="display-3">FLOWERY</h2></a>
          </div>
        <v-divider class="mx-4"></v-divider>
        <div class="ma-3 pa-4">
            <p class='font-italic text-center'>Preserve a piece of nature in unique jewelry</p>
        <v-text-field v-model="search" solo placeholder="Search" @input="search"></v-text-field>

        </div>
        <v-container fluid >
            <v-row class="row mb-5 justify-content-center" >
                <v-col
                v-for="card in cards"
                :key="card.src"
                cols="col-xs-12 col-sm-6 col-md-4"
                >
                <v-card>
                    <v-img
                    :src="card.src"
                    class="mx-auto"
                    >
                    </v-img>
                    <v-card-title v-text="card.title"></v-card-title>
                    <v-card-subtitle v-text="card.price"></v-card-subtitle>
                </v-card>
                </v-col>
            </v-row>
            <div class="text-center pt-2">
                <v-pagination
                    v-model="page"
                    :length=3
                ></v-pagination>
            </div>
    </v-container>
    <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer'

export default {
  name: 'shop',

  components: {
    Footer
  },
  data: () => ({
    search: '',
    page: 1,
    pageCount: 0,
    cards: [
      { src: require('@/assets/17.webp'), title: 'Серёжки месяц', price: 'Цена: $7' },
      { src: require('@/assets/24.webp'), title: 'Колечкo', price: 'Цена: $5' },
      { src: require('@/assets/25.webp'), title: 'Кулончик', price: 'Цена: $10' },
      { src: require('@/assets/26.webp'), title: 'Кулончик', price: 'Цена: $11' },
      { src: require('@/assets/27.webp'), title: 'Кулончик', price: 'Цена: $5' },
      { src: require('@/assets/22.webp'), title: 'Кулончик', price: 'Цена: $6' },
      { src: require('@/assets/21.webp'), title: 'Кулончик', price: 'Цена: $8' },
      { src: require('@/assets/20.webp'), title: 'Кулончик', price: 'Цена: $10' },
      { src: require('@/assets/23.webp'), title: 'Кулончик', price: 'Цена: $7' }
    ]
  })
}
</script>
<style>
    .flw {
        color: black;
        text-decoration: none;
        text-decoration-style: none;
    }
</style>
