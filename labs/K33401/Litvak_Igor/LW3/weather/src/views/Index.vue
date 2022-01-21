<template>
    <div>
        <h1 class="display-4">
            Weather forecast for <span class="hover-opacity" data-bs-toggle="modal" data-bs-target="#chooseCityModal">
        <span id="selected-city">St. Petersburg</span>
        <img src="img/edit-pen.svg" alt="edit" width="40px"></span>
        </h1>

        <div class="row g-2">
            <!-- Weather today -->
            <div class="col-12 col-lg-5">
                <div class="card">
                    <div class="card-header">
                        <h2 class="fs-4">Weather today</h2>
                    </div>
                    <div class="card-body" id="weather-today">
                        <weather-today icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" wind="3"></weather-today>
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
                            <table class="table table-borderless text-center align-middle">
                                <tr>
                                    <td><weather-week icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" day="MON"></weather-week></td>
                                    <td><weather-week icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" day="MON"></weather-week></td>
                                    <td><weather-week icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" day="MON"></weather-week></td>
                                    <td><weather-week icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" day="MON"></weather-week></td>
                                    <td><weather-week icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" day="MON"></weather-week></td>
                                    <td><weather-week icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" day="MON"></weather-week></td>
                                    <td><weather-week icon="img/weather-icons/thunderstorm.svg" temp="-5" desc="foobar" day="MON"></weather-week></td>
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
export default {
    name: "Index",
    components: {ChooseCityModal, WeatherWeek, WeatherToday}
}
</script>

<style scoped>

</style>
