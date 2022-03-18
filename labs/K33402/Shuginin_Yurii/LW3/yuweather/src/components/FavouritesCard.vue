<template>
    <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
        <div class="card border-primary mb-4">
            <div class="card-body d-flex flex-column text-primary">
                <h4 class="card-title text-center">Saint Petersburg</h4>
                <div class="d-flex justify-content-evenly my-3"><img src="@/images/rain.png" width="45" height="45"><h2>0°C</h2></div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Wind</b></p><p>8 m/s</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Cloudiness</b></p><p>Broken clouds</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Pressure</b></p><p>760 mmHg</p>
                </div>
                <div class="d-flex justify-content-between mb-1">
                    <p class="card-text"><b>Humidity</b></p><p>60 %</p>
                </div>
                <a href="forecast?city=Saint Petersburg" class="btn btn-primary mb-2">More</a>
                <a href="#" class="btn btn-outline-danger">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FavouritesCard'
}
</script>

<style>
</style>
