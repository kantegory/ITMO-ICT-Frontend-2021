<template>
  <div id="home">
    <!-- <Header/> -->
    <main>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <div class="container-fluid">
        <div class="text-center alert">
          <div class="pa-6 col-12">
            <h2 class="display-4">FLOWERY</h2>
          </div>
          <div class="pa-7 ma-5">
          <v-divider class="mx-4"></v-divider>
            <p class="pa-6">Welcome to my little world! Since childhood, I was a creative person, went to art school, dreamed of becoming an
              artist, later a fashion designer. That didn't happen. Two years ago, I found out that you can make amazing and
              unusual jewelry with epoxy resin and dried flowers. I got very excited about this idea and tried to recreate
              i what I already saw on the Internet. And I really liked the process. I started doing it every day. I really
              miss this job if I took a break for a few days. When I go outside, all I do is look for flowers around me, it
              has become a habit, and I became interested in botany. My family helps me collect flowers during the summer,
              namely my mom, grandma, boyfriend, boyfriend's mom. I'm very grateful to them! My dreams of becoming an artist
              or designer did not come true, but I am glad that everything turned out the way it did. I am glad that I did
              not leave this job and now I am doing such a wonderful thing. During these two years in my country I sold more
              than 3000 products. Now I would like to share Rodnik (English: the spring) with the rest of the world. I hope
              you enjoy my store!🌿</p>
            <v-divider class="mx-4"></v-divider>
          </div>
            <p class='text--secondary font-italic'>Preserve a piece of nature in unique jewelry</p>
        </div>
      </div>

      <v-container fluid >
            <v-row class="row mb-5 justify-content-center" >
                <v-col
                v-for="card in cards"
                :key="card.title"
                cols="col-xs-12 col-sm-6 col-md-4"
                >
                <v-card>
                    <v-img
                    :src="card.src"
                    class="mx-auto"
                    max-width="400"
                    >
                    </v-img>
                    <v-card-title v-text="card.title"></v-card-title>
                    <v-card-subtitle v-text="card.price"></v-card-subtitle>
                </v-card>
                </v-col>
            </v-row>
    </v-container>
    <div class="text-center"><v-btn x-large rounded plain color="cyan darken-4" elevation="4" to="/shop">Shop</v-btn></div>
    </main>
    <div class="mini-spacer"></div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Home',

  components: {
    Footer
  },

  data: () => ({
    items: [
      {
        src: require('@/assets/all1.webp')
      },
      {
        src: require('@/assets/cr03.webp')
      },
      {
        src: require('@/assets/all2.webp')
      }
    ],
    cards: [
      { title: 'Кулончики', src: require('@/assets/17.webp'), price: 'Цена: от $7' },
      { title: 'Колечки', src: require('@/assets/24.webp'), price: 'Цена: от $5 ' },
      { title: 'Серёжки', src: require('@/assets/25.webp'), price: 'Цена: от $7' }
    ]
  })
}
</script>
<style lang="scss">
main {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
}
h1 {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #f2f2f2;
}

h3 {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 400;
  color: black;
}
.mini-spacer {
  padding: 25px;
}
</style>
