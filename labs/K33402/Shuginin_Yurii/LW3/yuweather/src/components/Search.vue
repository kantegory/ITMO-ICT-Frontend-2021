<template>
    <div class="row">
        <div class="col-12">
            <h3 class="text-center text-primary">Hey!<br>We provide an accurate weather forecast for the next 7 days.</h3>
        </div>
        <form class="d-flex my-4 px-sm-5" @submit.prevent="search">
            <input class="form-control form-control-lg me-2 border-primary text-primary" type="search" id="city" placeholder="Enter the locality name" aria-label="Search" required>
            <button class="btn btn-primary" type="submit">Search</button>
        </form>
        <div class="col-12">
            <p class="text-center text-primary">Authorize to add locations to the Favourites section.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchComponent',

  methods: {
    search () {
      const city = document.getElementById('city').value
      const response = `forecast?city=${city}`
      window.location.href = response
    }
  }
}
</script>

<style>
</style>
