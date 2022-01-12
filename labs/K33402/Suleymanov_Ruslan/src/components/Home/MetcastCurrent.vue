<template>
    <div v-if="metcastCurrent">
        <b-card
                v-bind:title="metcastCurrent.name"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="m-auto"
        >
            <b-card-header>
                <div  class="d-flex justify-content-between align-items-center">
                    <h4 class="text-center m-0 h-100">
                        {{ metcastCurrent.weather[0].main }}
                    </h4>
                    <img v-bind:src="'http://openweathermap.org/img/wn/'+metcastCurrent.weather[0].icon+'.png'" alt="">
                </div>
                <div class="text-start">
                    {{ metcastCurrent.weather[0].description}}
                </div>
            </b-card-header>
            <b-card-text>
                <div class="info-line">
                    Температура: {{metcastCurrent.main.temp}}
                </div>
                <div class="info-line">
                    Давление: {{metcastCurrent.main.pressure}}
                </div>
                <div class="info-line">
                    Влажность: {{metcastCurrent.main.humidity}}
                </div>
                <div class="info-line">
                    влажность: {{metcastCurrent.main.humidity}}
                </div>
                <div class="info-line">
                    Скорость ветра: {{metcastCurrent.wind.speed}}
                </div>
                <div class="info-line">
                    Облачность: {{metcastCurrent.clouds.all}}
                </div>
            </b-card-text>
            <button v-on:click="addClick">Добавить в избранное</button>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "MetcastCurrent",
        computed: {
            ...mapGetters({
                metcastCurrent: 'metcastCurrent'
            })
        },
        methods: {
            addClick: function () {
                this.$store.dispatch('postCity')
            }
        }
    }
</script>

<style scoped>
    button {
        margin-top: 20px;
        border: 1px solid black;
        border-radius: 5px ;
    }    h4.card-title {
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