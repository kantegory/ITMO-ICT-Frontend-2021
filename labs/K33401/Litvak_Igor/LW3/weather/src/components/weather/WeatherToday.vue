<template>
    <div class="row g-4">
        <div class="col-sm-6">
            <div class="today-img-container">
                <img :src="icon" :alt="desc" class="img-icon">
            </div>
        </div>
        <div class="col-sm-6">
            <h3>{{ temp }}℃</h3>
            <p class="fs-4">{{ desc }}</p>
            <p class="fs-4">wind {{ wind }} m/s</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "WeatherToday",
    props: ["icon", "temp", "desc", "wind"]
}
</script>

<style scoped>

</style>
