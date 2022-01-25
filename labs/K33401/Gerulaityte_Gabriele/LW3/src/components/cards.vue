<template>
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
        <div class="text-center"><v-btn x-large rounded plain color="cyan darken-4" elevation="4" to="/shop">Купить!</v-btn></div>
    </v-container>
</template>
<script>
export default {
  name: 'cards',
  data: () => ({
    cards: [
      { src: require('@/assets/17.webp'), title: 'Серёжки месяц', price: 'Цена: $7' },
      { src: require('@/assets/24.webp'), title: 'Колечкo', price: 'Цена: $5' },
      { src: require('@/assets/25.webp'), title: 'Кулончик', price: 'Цена: $10' }
    ]
  })
}
</script>
