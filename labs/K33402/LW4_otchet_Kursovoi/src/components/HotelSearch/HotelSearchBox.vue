<template>
  <div
    class="border-0 shadow mt-3 p-3 rounded"
    :class="`bg-${dark ? 'dark' : 'white'}`"
  >
    <div class="row">
      <div class="col-md">
        <div class="form-floating">
          <vue-google-autocomplete
            id="city"
            ref="address"
            classname="form-control"
            placeholder="Choose city 🏖️"
            types="(cities)"
            v-on:placechanged="getAddressData"
          />
          <label for="city">Choose city 🏖️ </label>
        </div>
      </div>

      <div class="col-md">
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            id="checkin"
            v-model="search.checkInDate"
            placeholder="Check-in date"
          />
          <label for="checkin">Check-in date</label>
        </div>
      </div>

      <div class="col-md">
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            id="checkout"
            v-model="search.checkOutDate"
            placeholder="Check-out date"
          />
          <label for="checkout">Check-out date</label>
        </div>
      </div>

      <div class="col-md">
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            id="adults"
            placeholder="Adults 👩"
            min="1"
            max="9"
            v-model="search.adults"
          />
          <label for="adults">Adults 👩</label>
        </div>
      </div>
    </div>

    <div class="d-flex mt-3">
      <button
        class="btn btn-lg mx-auto px-5"
        :class="`btn-${dark ? 'light' : 'dark'}`"
        v-on:click="computeSearchRoute"
        style="font-family: 'Lobster', cursive"
      >
        Stay.
      </button>
    </div>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  name: "HotelSearchBox",
  components: {
    VueGoogleAutocomplete,
  },
  data() {
    return {
      search: {
        address: this.address ?? "",
        geometry: {
          lat: null,
          lng: null,
        },
        checkInDate: this.checkInDate ?? null,
        checkOutDate: this.checkOutDate ?? null,
        adults: this.adults ?? 1,
      },
    };
  },
  props: {
    address: String,
    checkInDate: Date,
    checkOutDate: Date,
    adults: Number,
  },
  mounted() {
    // this.$refs.address.focus();
    this.$refs.address.update(this.address);
  },
  computed: {
    dark() {
      return this.$store.getters.getDark;
    },
  },
  methods: {
    getAddressData: function (addressData, placeResultData) {
      this.search.address = placeResultData.formatted_address;
      this.search.geometry.lat = addressData.latitude;
      this.search.geometry.lng = addressData.longitude;
    },
    computeSearchRoute: function () {
      this.$router.push({
        path: "metasearch",
        query: {
          lat: this.search.geometry.lat,
          lng: this.search.geometry.lng,
          checkInDate: this.search.checkInDate,
          checkOutDate: this.search.checkOutDate,
          adults: this.search.adults,
          address: this.search.address,
        },
      });
    },
  },
};
</script>
