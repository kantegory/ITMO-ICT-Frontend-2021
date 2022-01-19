<template>
  <footer class="pt-4 my-md-5 pt-md-5 border-top container">
    <div class="row">
      <div class="col-12 col-md">
        <img
          class="mb-2"
          :src="`Logo-${dark === true ? 'light' : 'dark'}.svg`"
        />
        <small class="d-block mb-3 text-muted"
          >&copy; 2021, All rights reserved</small
        >
      </div>
      <div class="col-6 col-md">
        <h5 :class="`text-${dark ? 'light' : 'dark'}`">Features</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1">
            <router-link
              to="/booking"
              class="link-secondary text-decoration-none"
              >Hotel Search</router-link
            >
          </li>
          <li class="mb-1">
            <router-link to="/" class="link-secondary text-decoration-none"
              >Home Page</router-link
            >
          </li>
          <li class="mb-1">
            <router-link to="/about" class="link-secondary text-decoration-none"
              >About</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5 :class="`text-${dark ? 'light' : 'dark'}`">About</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1">
            <router-link to="/login" class="link-secondary text-decoration-none"
              >Login</router-link
            >
          </li>
          <li class="mb-1">
            <router-link
              to="/register"
              class="link-secondary text-decoration-none"
              >Register</router-link
            >
          </li>
          <li class="mb-1">
            <router-link
              to="/changepassword"
              class="link-secondary text-decoration-none"
              >Change Password</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="row mt-5">
      <div class="d-flex">
        <p
          class="mx-auto"
          style="font-family: 'Pacifico', cursive"
          :class="`text-${dark ? 'light' : 'dark'}`"
        >
          from Lan Anh with ❤️
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    dark() {
      return this.$store.getters.getDark;
    },
  },
};
</script>
