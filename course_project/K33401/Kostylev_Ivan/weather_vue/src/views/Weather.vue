<template>
     <div class="container">
          <h2 class="fs-4">Hello, Ivan!</h2>
          <div class="row row-cols-1 row-cols-md-3 mt-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 box-shadow">
                  <img class="card-img" image src="@/assets/spb.jpg" width="300" height="150">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Current location</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title" id="loc0_now">-</h1>
                    <b-table class="table mt-2 mb-2" striped hover :items="weather1"></b-table>
                  </div>
            </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 box-shadow">
                    <img class="card-img" image src="@/assets/moscow.jpg" width="300" height="150">
                    <div class="card-header py-3">
                      <h4 class="my-0 fw-normal">Moscow</h4>
                    </div>
                    <div class="card-body">
                      <h1 class="card-title pricing-card-title" id="loc1_now">-</h1>
                      <b-table class="table mt-2 mb-2" striped hover :items="weather2"></b-table>
                    </div>
              </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 box-shadow">
                    <img class="card-img" image src="@/assets/perm.jpg"  width="300" height="150">
                    <div class="card-header py-3">
                      <h4 class="my-0 fw-normal">Perm</h4>
                    </div>
                    <div class="card-body">
                      <h1 class="card-title pricing-card-title" id="loc2_now">-</h1>
                      <b-table class="table mt-2 mb-2" striped hover :items="weather2">
                      </b-table>
                    </div>
              </div>
            </div>
    </div>
     </div>
</template>

<script>
export default {
  data () {
    return {
      weather1: [
        { date: 'today', temp: '-', prec: '-' },
        { date: 'tomorrow', temp: '-', prec: '-' },
        { date: '29.01', temp: '-', prec: '-' }
      ],
      weather2: [
        { date: 'today', temp: '-', prec: '-' },
        { date: 'tomorrow', temp: '-', prec: '-' },
        { date: '29.01', temp: '-', prec: '-' }
      ],
      weather3: [
        { date: 'today', temp: '-', prec: '-' },
        { date: 'tomorrow', temp: '-', prec: '-' },
        { date: '29.01', temp: '-', prec: '-' }
      ]
    }
  }
}
</script>

<style scoped>
.fs-4 {
    text-align: left;
}
</style>
