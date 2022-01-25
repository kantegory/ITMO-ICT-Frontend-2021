<template>
    <div>
        <h1 class="display-4" v-if="this.$store.state.selectedCity">
            Weather forecast for <span class="hover-opacity" data-bs-toggle="modal" data-bs-target="#chooseCityModal">
                {{ this.$store.state.selectedCity.name}}
                <img src="img/edit-pen.svg" alt="edit" width="40px">
            </span>
        </h1>
        <h1 class="display-4" v-else>
            <span class="hover-opacity" data-bs-toggle="modal" data-bs-target="#chooseCityModal">
                Please choose city
                <img src="img/edit-pen.svg" alt="edit" width="40px">
            </span>
        </h1>

        <div class="row g-2">
            <!-- Weather today -->
            <div class="col-12 col-lg-5">
                <div class="card">
                    <div class="card-header">
                        <h2 class="fs-4">Weather today</h2>
                    </div>
                    <div class="card-body" id="weather-today">
                        <weather-today v-if="this.$store.state.todayWeather" :icon="this.$store.state.todayWeather.icon"
                                       :temp="this.$store.state.todayWeather.temp"
                                       :desc="this.$store.state.todayWeather.desc"
                                       :wind="this.$store.state.todayWeather.wind"></weather-today>
                        <div class="row g-4" v-else>
                            <div class="col-sm-6">
                                <div class="today-img-container placeholder-glow">
                                    <span class="placeholder w-100 h-100"></span>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <h3 class="placeholder-glow"><span class="placeholder col-8"></span></h3>
                                <p class="fs-4 placeholder-glow"><span class="placeholder col-5"></span></p>
                                <p class="fs-4 placeholder-glow"><span class="placeholder col-7"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Weather this week -->
            <div class="col-12 col-lg-7">
                <div class="card">
                    <div class="card-header">
                        <h2 class="fs-4">Weather this week</h2>
                    </div>
                    <div class="card-body" id="weather-week">
                        <div class="table-responsive">
                            <table class="table table-borderless text-center align-middle"
                                   v-if="this.$store.state.weekWeather">
                                <tr>
                                    <td v-for="item in this.$store.state.weekWeather" :key="item.day">
                                        <weather-week :icon="item.icon" :temp="item.temp" :desc="item.desc"
                                                      :day="item.day"></weather-week>
                                    </td>
                                </tr>
                            </table>
                            <table class="table table-borderless text-center align-middle" v-else>
                                <tr>
                                    <td v-for="i in 7" :key="i">
                                        <p class="placeholder-glow"><span class="placeholder col-7"></span></p>
                                        <p class="placeholder-glow"><span class="placeholder col-5"></span></p>
                                        <div class="week-img-container placeholder-glow">
                                            <span class="placeholder w-100 h-100"></span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <choose-city-modal></choose-city-modal>
    </div>
</template>

<script>
import WeatherToday from "../components/weather/WeatherToday";
import WeatherWeek from "../components/weather/WeatherWeek";
import ChooseCityModal from "../components/modals/chooseCityModal";
import store from "../store";

export default {
    name: "Index",
    components: {ChooseCityModal, WeatherWeek, WeatherToday},
    async created() {
        await store.dispatch('getForecast', store.state.selectedCity.id);
    }
}
</script>

<style scoped>

</style>
