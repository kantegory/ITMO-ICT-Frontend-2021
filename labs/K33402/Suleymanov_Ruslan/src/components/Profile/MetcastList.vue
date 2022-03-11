<template>
    <div>
        <div class="container">
            <div class="d-flex flex-wrap justify-content-around">
                <div v-for="(el,index) in $store.state.metcast.metcasts" v-bind:key="index">
                    <b-card
                            v-bind:title="el.name"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-5"
                    >
                        <b-card-header>
                            <div  class="d-flex justify-content-between align-items-center">
                                <h4 class="text-center m-0 h-100">
                                    {{ el.weather[0].main }}
                                </h4>
                                <img v-bind:src="'http://openweathermap.org/img/wn/'+el.weather[0].icon+'.png'" alt="">
                            </div>
                            <div class="text-start">
                                {{ el.weather[0].description}}
                            </div>
                        </b-card-header>
                        <b-card-text>
                                <div class="info-line">
                                    Температура: {{el.main.temp}}
                                </div>
                                <div class="info-line">
                                    Давление: {{el.main.pressure}}
                                </div>
                                <div class="info-line">
                                    Влажность: {{el.main.humidity}}
                                </div>
                                <div class="info-line">
                                    влажность: {{el.main.humidity}}
                                </div>
                                <div class="info-line">
                                    Скорость ветра: {{el.wind.speed}}
                                </div>
                                <div class="info-line">
                                    Облачность: {{el.clouds.all}}
                                </div>
                        </b-card-text>
                        <button v-on:click="deleteItem(el.city_id)">Удалить</button>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MetcastList",
        methods: {
            /**
             * deleteItem,
             * @constructor
             * @param {string} index - city_id
             */
            deleteItem: function (index) {
                let delIndex = this.$store.state.user.membership.find(item => item.city === index);
                this.$store.dispatch('deleteCityUser', delIndex.id)
            }
        }
    }
</script>
<style scoped>
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