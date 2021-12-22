<template>
  <Navbar />

  <section class="metasearch-section container">
    <HotelSearchSpread
      :address="this.$route.query.address"
      :checkInDate="this.$route.query.checkInDate"
      :checkOutDate="this.$route.query.checkOutDate"
      :adults="this.$route.query.adults"
    />
  </section>

  <section class="hotel-section container">
    <div class="row">
      <div class="col-4">
        <div
          class="p-5 text-white rounded-3"
          :class="dark ? '' : 'bg-dark'"
          :style="dark ? 'background-color: var(--bs-gray-800)' : ''"
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

        <div
          class="rounded p-5 mt-3"
          :class="dark ? '' : 'border bg-dark'"
          :style="dark ? 'background-color: var(--bs-gray-800)' : ''"
        >
          <p :class="dark ? 'text-white' : 'text-dark'">Options</p>
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="STAR_RATING_HIGHEST_FIRST" selected>
                Highest Rating First
              </option>
              <option value="BEST_SELLER">Best Seller</option>
              <option value="PRICE_HIGHEST_FIRST">Highest Price First</option>
            </select>
            <label for="floatingSelect">Sort order</label>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="hotel-loading d-flex">
          <span v-if="loading" class="mx-auto mt-5">
            <img :src="dark ? 'cat.loader.light.svg' : 'cat.loader.dark.svg'" alt="" />
          </span>
        </div>
        <div class="hotel-result" v-if="!loading">
          <div
            class="hotel-group"
            v-for="hotel in searchResults.results"
            v-bind:key="hotel.id"
          >
            <Hotel
              :city="hotel.address.locality"
              :title="hotel.name"
              :address="`${hotel.address.streetAddress}, ${hotel.address.locality}`"
              :price="hotel.ratePlan.price.exactCurrent"
              :imgUrl="hotel.optimizedThumbUrls.srpDesktop"
              :review="{
                rateScale: hotel.guestReviews?.scale ?? 5,
                rating: hotel.guestReviews?.rating ?? 'NA',
                reviewBadge: hotel.guestReviews?.badgeText ?? '',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HotelSearchSpread from "../components/HotelSearch/HotelSearchSpread.vue";
import Hotel from "../components/Hotel.vue";
import HotelApi from "../services/hotel.api";

export default {
  name: "MetaSearch",
  data() {
    return {
      searchResults: {
        pagination: {},
        results: [],
      },
      loading: true,
    };
  },
  components: {
    Navbar,
    HotelSearchSpread,
    Hotel,
  },
  mounted() {
    this.fetchHotelsOnLoad(this.$route.query);
  },
  computed: {
    dark() {
      return this.$store.getters.getDark;
    },
  },
  methods: {
    fetchHotelsOnLoad: async function (queryParams) {
      this.loading = true;

      const { lat, lng, checkInDate, checkOutDate, adults } = queryParams;
      if (!lat || !lng || !checkInDate || !checkOutDate || !adults) {
        console.error("Missing");
        this.loading = false;
        return;
      }

      try {
        const { data } = await HotelApi.searchHotelsByGeolocation({
          lat,
          lng,
          checkInDate,
          checkOutDate,
          adults,
        });
        this.searchResults = data.searchResults;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
  beforeRouteUpdate(to, _from, next) {
    this.fetchHotelsOnLoad(to.query);
    next();
  },
};
</script>

<style scoped></style>
