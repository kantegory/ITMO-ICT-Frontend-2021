<template>
    <div>
        <b-button class="m-2" v-on:click="pos" v-b-modal.modal-1>Узнать текущую погоду в регионе</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
            <div class="current-block" v-if="$store.state.metcast.metcastCurrent">
                <b-card
                        v-bind:title="$store.state.metcast.metcastCurrent.name"
                >
                    <b-card-header>
                        <div  class="d-flex justify-content-between align-items-center">
                            <h4 class="text-center m-0 h-100">
                                {{ $store.state.metcast.metcastCurrent.weather[0].main }}
                            </h4>
                            <img v-bind:src="'http://openweathermap.org/img/wn/'+$store.state.metcast.metcastCurrent.weather[0].icon+'.png'" alt="">
                        </div>
                        <div class="text-start">
                            {{ $store.state.metcast.metcastCurrent.weather[0].description}}
                        </div>
                    </b-card-header>
                    <b-card-text>
                        <div class="info-line">
                            Температура: {{$store.state.metcast.metcastCurrent.main.temp}}
                        </div>
                        <div class="info-line">
                            Давление: {{$store.state.metcast.metcastCurrent.main.pressure}}
                        </div>
                        <div class="info-line">
                            Влажность: {{$store.state.metcast.metcastCurrent.main.humidity}}
                        </div>
                        <div class="info-line">
                            влажность: {{$store.state.metcast.metcastCurrent.main.humidity}}
                        </div>
                        <div class="info-line">
                            Скорость ветра: {{$store.state.metcast.metcastCurrent.wind.speed}}
                        </div>
                        <div class="info-line">
                            Облачность: {{$store.state.metcast.metcastCurrent.clouds.all}}
                        </div>
                    </b-card-text>
                </b-card>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {getWeatherPos} from "@/http/getWetherPos";

    export default {
        name: "CurrentWeather",
        methods: {
            pos: function () {
                let options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }

                function success(pos) {
                    let crd = pos.coords;
                    getWeatherPos(crd.latitude,crd.longitude)
                }

                function error() {
                    alert('Необходимо разрешение местоположения')
                }

                navigator.geolocation.getCurrentPosition(success, error, options);
            }
        }
    }

</script>

<style scoped>
    .current-block {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    h4.card-title {
        color: #000;
    }
    .card-header {
        background-color: var(--back-color)!important;
    }
    .info-line {
        background-color: var(--back-color)!important;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        width: 18rem;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 40px;
        border-radius: 10px ;
    }
</style>