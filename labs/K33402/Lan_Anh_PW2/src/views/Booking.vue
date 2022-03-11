<template>
  <Navbar />

  <section class="hotel-search container">
    <div
      class="p-5 mb-4 rounded-3"
      :class="!dark ? 'bg-light' : ''"
      :style="dark ? 'background-color: var(--bs-gray-800)' : ''"
    >
      <div class="container-fluid py-5">
        <h1
          class="display-5 fw-bold"
          :class="`text-${dark ? 'light' : 'dark'}`"
        >
          Find yourself a
          <span style="font-family: 'Lobster', cursive">Stay.</span>
        </h1>
        <p class="col-md-8 fs-4" :class="`text-${dark ? 'light' : 'dark'}`">
          Take a deep breath in the morning. Immerse in the nature.
        </p>
        <HotelSearchBox />
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2 :class="`text-${dark ? 'light' : 'dark'}`">Popular cities</h2>

    <div class="cities-group d-flex flex-row flex-wrap justify-content-evenly">
      <City
        city="Hanoi, Vietnam"
        description="Hanoi is interesting. It may be old and crumbling in parts but it's a
        city wrought with character."
        imgUrl="https://file3.qdnd.vn/data/images/0/2021/10/06/vuongthuy/15092021vthuy556.jpg"
      />

      <City
        city="Saint Petersburg, Russia"
        description="St. Petersburg is recognized as one of the largest economic, cultural and scientific centers of Russia, Europe and the whole world."
        imgUrl="https://misstourist.com/wp-content/uploads/2017/02/Top-11-Things-To-Do-In-Saint-Petersburg-Russia-saint-petersburg-church-1-660x442.jpg"
      />

      <City
        city="New York, America"
        description="New York is a city that's always celebrating something, and summer is one of the best times to visit."
        imgUrl="https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg"
      />

      <City
        city="Maldives"
        description="The Maldives is a by-word for luxury, romance and tropical bliss. A beautiful string of low-lying coral islands in the Indian Ocean."
        imgUrl="https://media.architecturaldigest.com/photos/6032b337b526975f5405e0a0/16:9/w_2560%2Cc_limit/Hero_Soneva%2520Jani%2520Chapter%2520Two%2520by%2520Aksham%2520Abdul%2520Ghadir.jpg"
      />
    </div>
  </section>

  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <div
          class="h-100 p-5 text-white rounded-3"
          :class="dark ? '' : 'bg-dark'"
          :style="dark ? 'background-color: var(--bs-gray-800)': ''"
        >
          <h2>Covid safety</h2>
          <p>
            Always check for local government information and hotel hosts before
            booking a stay
          </p>

          <a
            class="btn btn-outline-light"
            href="https://www.google.com/search?q=covid"
            target="_blank"
            >More Covid Updates</a
          >
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HotelSearchBox from "../components/HotelSearch/HotelSearchBox.vue";
import City from "../components/City.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Booking",
  components: {
    Navbar,
    HotelSearchBox,
    City,
    Footer,
  },
  computed: {
    dark() {
      return this.$store.getters.getDark;
    },
  },
};
</script>

<style scoped></style>
