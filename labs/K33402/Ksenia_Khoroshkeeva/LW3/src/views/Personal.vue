<template>
    <main class="container">
        <h4 class="col-sm-5 my-3">Здравствуйте, {{ profile.username }}</h4>
        <p class="mb-0">Ваша погода на неделю</p>
        <div class="row">
            <div class="col-sm-5 my-3 ">
                <div class="card text-white my-bg-p">
                    <div class="card-body" v-if="weatherApiData.length>0" >
                        <img :src="getImage(weatherApiData[0].temp.day)" class="card-img-top" alt="...">
                        <h5 class="card-title my-3">{{weatherApiData[0].temp.day}}°, Сегодня, {{activeCity}}</h5>
                        <p class="card-text">{{ getText(weatherApiData[0].temp.day, weatherApiData[0].weather[0].description) }}</p>
                    </div>
                </div>
                <Accordion />
            </div>
            <div class="col-sm-7 my-3 ">
                <Tab />
            </div>
        </div>
    </main>
</template>

<script>
    import Accordion from "@/components/Accordion";
    import Tab from "@/components/Tab";
    import {mapGetters} from "vuex";
    import router from "@/router";

    export default {
        name: "Personal",
        components: {Tab, Accordion},
        computed: {
            ...mapGetters({
                profile: 'profile',
                activeCity: 'activeCity',
                weatherApiData: 'weatherApiData',
            })
        },
        beforeMount() {
            let isAuthenticated = localStorage.getItem('token');
            if (!isAuthenticated) ( router.push('/login'))
        },
        mounted() {
            this.$store.dispatch('Profile')
        },
        methods: {
            getText: function (temp, description) {
                if (temp < 0) {
                    return `На улице ${description}, ощущается как обморожение`
                } else {
                    return `На улице ${description}, довольно тепло`
                }
            },
            getImage: function (temp) {
                if (temp < 0) {
                    return require("../assets/img1.jpg")
                } else {
                    return require("../assets/img4.jpg")
                }
            }
        }
    }
</script>

<style scoped>
    .my-bg-p {
        background-color: #5f0b81;
    }
</style>
