<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <img class="col" alt="" src="../../public/zontik.png">
          <h3 class="col">Погода</h3>
          <router-link class="col2 link" :to="{name: 'Personal'}">
            <p class=" mt-3">Главная</p>
          </router-link>
          <router-link class="col2 link" :to="{name: 'Preferences'}">
            <p class=" mt-3">Закрепленные города</p>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header{
  box-shadow: 2px 5px 10px rgba(0 0 0 0.1);
}
  .link {
    text-decoration: none;
    color: black;
    width: max-content;
  }
  .link:hover {
    color: blue;
  }
</style>
