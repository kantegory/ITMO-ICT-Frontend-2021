<template>
    <section class="w-50 h-75 mt-5">
        <h2>Все подходящие билеты</h2>
        <div id="all" v-for="(el,index) in tickets" v-bind:key="index">
            <div class="card d-flex flex-row align-items-center mb-3">
                <img src="../assets/DP.png" class="w-25" alt="pobeda">
                <div class="card-body">
                    <h4 class="card-title">{{ el.name }}</h4>
                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <div class="d-flex flex-column">
                            <h5 class="card-text">{{el.start.time}}</h5>
                            <p class="card-text">{{el.start.city}},<br/>{{el.start.date}}, {{el.start.week}}</p>
                        </div>
                        <div class="d-flex ">
                            <p class="mr-2">{{el.start.airport}}</p>
                            <p>В пути {{el.time}}</p>
                            <p class="ml-2">{{el.end.airport}}</p>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="card-text">{{el.end.time}}</h5>
                            <p class="card-text">{{el.end.city}},<br/>{{el.end.date}}, {{el.end.week}}</p>
                        </div>
                    </div>
                    <div class="price d-flex justify-content-between align-items-center">
                        <span>Цена за билет: {{el.price}}</span>
                        <button class="btn text-white bg-orange" >Купить билет</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "ResultTickets",
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'tickets',
            ])
        }

    }
</script>

<style scoped>
    .bg-orange {
         background: var(--btn-color);
         padding-left: 20px;
         padding-right: 20px;
     }
    .card {
        background: var(--body-color);
        color: black;
        border-radius: 25px;
        padding: 0 10px;
        margin-top: 20px;

    }
    .card img {
        height: 50px;
    }
    .card .price {
        margin-top: 10px;
    }
</style>
