<template>
    <div class="row">
        <div class="col-12">
            <h3 class="text-center text-primary">Hey!<br>We provide an accurate weather forecast for the next 7 days.</h3>
        </div>
        <form class="d-flex my-4 px-sm-5">
            <input class="form-control form-control-lg me-2 border-primary text-primary" type="search" placeholder="Enter the locality name" aria-label="Search">
            <button class="btn btn-primary" type="submit">Search</button>
        </form>
        <div class="col-12">
            <p class="text-center text-primary">Authorize to add locations to the Favourites section.</p>
        </div>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {

//     },
// })
export default {
  name: 'SearchComponent'
}
</script>

<style>

</style>
