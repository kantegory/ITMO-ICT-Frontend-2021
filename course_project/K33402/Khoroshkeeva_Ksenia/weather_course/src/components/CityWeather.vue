<template>
    <div v-if="weatherApiData.length" class="col">
        <div class="row-3 my-3 mx-5" v-for="(el, index) in weatherApiData" :key="index">
            <hr/>
            <div>
                <h5 class="card-title">{{ el.temp.day }}°, {{ moment(el.dt)}},{{ name }}</h5>
                <p class="card-text">{{ getText(el.temp.day, el.weather[0].description) }}</p>
                <p class="card-text">Температура днем: {{ el.temp.max }}</p>
                <p class="card-text">Температура вечером: {{ el.temp.min }}</p>
                <p class="card-text">Температура ночью: {{ el.temp.night }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";
    import {mapGetters} from "vuex";

    export default {
        name: "CityWeather",
        props: ['id', 'name', 'description', 'lat', 'lon'],
        methods: {
            moment: function (date) {
                return moment.utc(date*1000).format('ddd DD MMM');
            },
            getText: function (temp, description) {
                if (temp < 0) {
                    return `На улице ${description}, рекомендуем надевать шапку`
                } else {
                    return `На улице ${description}, шапку можно не надевать`
                }
            }
        },
        computed: {
            ...mapGetters({
                weatherApiData: 'weatherApiData'}
                )
        },
        mounted() {
            this.$store.dispatch('getWeatherApiData', {name: this.name, lat: this.lat ,lon: this.lon})
        }
    }
</script>

<style scoped>

</style>
