<template>
    <div class="container flex-wrap">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <router-link class="navbar-brand" :to="{name: 'Weather'}">M.Y.Weather</router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarMy">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Weather'}">Main</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Search'}">Search</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'SignIn'}">Log out</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">About authors</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
