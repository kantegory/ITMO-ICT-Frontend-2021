<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-custom sticky-top">
      <div class="container-fluid">
        <a href="/" class="navbar-brand">
          <div class="img"></div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="/user-info" class="nav-link" v-bind:class="{'link__active': this.$route.path==='/user-info'}">info</a>
            </li>
            <li class="nav-item active">
              <a href="/my-videos" class="nav-link " v-bind:class="{'link__active': this.$route.path==='/my-videos'}">my
                                                                                                                      videos</a>
            </li>
            <li class="nav-item active">
              <a href="/cabinet" class="nav-link"
                 v-bind:class="{'link__active': this.$route.path==='/cabinet'}">videos</a>
            </li>
            <li class="nav-item active">
              <a href="/images" class="nav-link"
                 v-bind:class="{'link__active': this.$route.path==='/images'}">images</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" type="submit" v-on:click="logoutUser">log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Links",
  mounted() {
    this.$store.dispatch("getUserData")
  },
  methods: {
    ...mapMutations(["logout"]),
    logoutUser: function (event) {
      event.preventDefault();
      this.logout();
    },
  }
}
</script>

<style scoped>

</style>
