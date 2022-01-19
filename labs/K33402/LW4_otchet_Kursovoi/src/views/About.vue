<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="bootstrap" viewBox="0 0 118 94">
      <title>Bootstrap</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
      ></path>
    </symbol>
    <symbol id="calendar3" viewBox="0 0 16 16">
      <path
        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
      />
      <path
        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </symbol>
    <symbol id="geo-fill" viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
      />
    </symbol>
  </svg>

  <Navbar />

  <section class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          :src="`stay-screenshot-${dark ? 'light' : 'dark'}.png`"
          class="d-block mx-lg-auto img-fluid"
          style="border-radius: 10px"
          alt="Bootstrap Themes"
          width="700"
          height="500"
        />
      </div>
      <div class="col-lg-6">
        <h1
          class="display-5 fw-bold lh-1 mb-3"
          :class="`text-${dark ? 'light' : 'dark'}`"
        >
          Search hotels in your beloved destination
        </h1>
        <p class="lead" :class="`text-${dark ? 'light' : 'dark'}`">
          With the fully integrated API from multiple sources. This meta search
          is great for travellers that are busy and hurry.
        </p>
      </div>
    </div>
  </section>

  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom" :class="`text-${dark ? 'light' : 'dark'}`">
      Featured Destination
    </h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div
        class="col"
        v-for="place in places"
        :key="place.city.split(' ').join().toLowerCase()"
      >
        <div
          class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg border-0"
          :style="`background-image: url('${place.imageSrc}'); background-size: cover; background-repeat: no-repeat;`"
        >
          <div
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              {{ place.city }}
            </h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="Logo-light.svg"
                  alt="Bootstrap"
                  width="64"
                  height="64"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill" />
                </svg>
                <small>{{ place.country }}</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3" />
                </svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Booking",
  data: () => ({
    places: [
      {
        city: "Hanoi",
        imageSrc: "hanoi.jpg",
        country: "Vietnam",
      },
      {
        city: "Saint Petersburg",
        imageSrc: "saint.jpg",
        country: "Russia",
      },
      {
        city: "Adelaide",
        imageSrc: "adelaide.jpg",
        country: "Australia",
      },
    ],
  }),
  components: {
    Navbar,
    Footer,
  },
  computed: {
    dark() {
      return this.$store.getters.getDark;
    },
  },
};
</script>

<style scoped>
.rounded-5 {
  border-radius: 1rem;
}
</style>
