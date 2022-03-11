<template>
    <b-card no-body>
        <b-tabs lazy card>
            <div v-for="(el, index) in userCity" :key="el.index">
                <b-tab :title="el.city.name" :active="index === 0">
                    <div class="d-flex justify-content-between mx-5">
                        <p class="mb-0">{{el.city.description}}</p>
                        <b-button v-on:click="removeCity(el.id)" variant="danger">Открепить город</b-button>
                    </div>
                    <CityWeather :id="el.id" :name="el.city.name" :description="el.city.description" :lat="el.city.lat" :lon="el.city.lon" />
                </b-tab>
            </div>
        </b-tabs>
    </b-card>
</template>

<script>
    import {mapGetters} from "vuex";
    import CityWeather from "@/components/CityWeather";

    export default {
        name: "Tab",
        components: {CityWeather},
        computed: {
            ...mapGetters({
                userCity: 'userCity',
            })
        },
        mounted() {
            this.$store.dispatch('getUserCities')
        },
        methods: {
            removeCity(val) {
                this.$store.dispatch('delUserCity', val)
            }
        },
    }
</script>

<style scoped>

</style>