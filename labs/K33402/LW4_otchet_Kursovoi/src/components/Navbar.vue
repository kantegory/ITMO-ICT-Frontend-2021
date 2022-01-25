<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
      >
        <img :src="`Logo-${dark === true ? 'light' : 'dark'}.svg`" alt="" />
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <router-link to="/" class="nav-link px-2 link-secondary"
            >Home</router-link
          >
        </li>

        <li>
          <router-link
            to="/booking"
            class="nav-link px-2"
            :class="`link-${dark === true ? 'light' : 'dark'}`"
            >Booking</router-link
          >
        </li>

        <li>
          <router-link
            to="/about"
            class="nav-link px-2"
            :class="`link-${dark === true ? 'light' : 'dark'}`"
            >About</router-link
          >
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <div v-show="!authenticated">
          <router-link
            to="/login"
            class="btn me-2"
            :class="`btn-outline-${dark === true ? 'light' : 'dark'}`"
            >Login</router-link
          >
          <router-link
            to="/register"
            class="btn"
            :class="`btn-${dark === true ? 'light' : 'dark'}`"
            >Sign-up</router-link
          >

          <div class="form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="dark"
              id="flexSwitchCheckDefault"
            />
            <label
              class="form-check-label"
              for="flexSwitchCheckDefault"
              :class="`text-${dark ? 'light' : 'dark'}`"
              >Dark mode</label
            >
          </div>
        </div>

        <div v-show="authenticated">
          <b class="mx-3 inline-block">Le Lan (Calcifer) Anh</b>
          <div class="dropdown d-inline-block">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="user.png"
                alt="mdo"
                width="32"
                height="32"
                style="
                  border-width: 2px;
                  border-style: solid;
                  border-color: #28a745;
                "
                class="rounded-circle"
              />
            </a>

            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownUser"
            >
              <li>
                <router-link to="/profile" class="dropdown-item"
                  >Profile</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item" v-on:click="signOut">
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    signOut() {
      this.$store.commit("setAuthenticated", { authenticated: false });
      this.$router.push({ name: "Booking" });
      localStorage.removeItem('authenticated');
    },
  },
  mounted() {
    this.dark = this.$store.state.dark;
  },
  computed: {
    authenticated() {
      return this.$store.getters.getAuthenticated;
    },
  },
  watch: {
    dark(newValue) {
      this.$store.commit("setDark", { dark: newValue });
      document
        .querySelector("body")
        .setAttribute(
          "style",
          `background-color: var(--bs-${newValue ? "dark" : "white"})`
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}
</style>
