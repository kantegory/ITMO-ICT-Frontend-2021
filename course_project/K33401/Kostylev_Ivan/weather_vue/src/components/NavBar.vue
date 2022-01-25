<template>
    <div class="container flex-wrap">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" columns="visible:false" :to="{name: 'Weather'}">M.Y.Weather</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarMy">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" :to="{name: 'Weather'}">Main</a>
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
