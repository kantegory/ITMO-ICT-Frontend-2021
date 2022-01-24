<template>
    <div>
        <p><b>{{ day }}</b></p>
        <p>{{ temp }}℃</p>
        <div class="week-img-container">
            <img :src="icon" :alt="desc" class="img-icon">
        </div>

    </div>
</template>

<script>
export default {
    name: "WeatherWeek",
    props: ["icon", "temp", "desc", "day"]
}
</script>

<style scoped>

</style>
