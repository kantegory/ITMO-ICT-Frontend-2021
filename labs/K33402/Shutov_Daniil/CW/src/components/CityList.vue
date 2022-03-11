<template>
    <div class="col-lg-8 mt-5">
        <div class="row">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form @submit.prevent="setSearch(search)" class="search d-flex">
                        <input v-model="search" class="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div class="d-flex flex-column me-5" v-for="(city, index) in citylist.filter(el => {
                    let flag = el.country === filterCountry || filterCountry=== '';
                    if (filterSearch!=='') {
                        flag = flag && (el.name.toLowerCase().indexOf(filterSearch.toLowerCase()) > -1)
                    }
                    return flag})" :key="index">
                <City :city="city" :apiKey="'6e9d6b613a503e6f7f3f03473587c4c9'" :id="city.id" :add="true"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import City from "@/components/City";

    export default {
        name: "CityList",
        components: {City},
        data() {
            return {
                search: ''
            };
        },
        mounted() {
            this.$store.dispatch('cityList')
        },
        methods: {
            setSearch(search) {
                this.$store.commit('setSearch', search)
            }
        },
        computed: {
            ...mapGetters({
                citylist: 'citylist',
                filterCountry: 'filterCountry',
                filterSearch: 'filterSearch'
            })
        },
    }
</script>

<style scoped>
    .search {
        width: 100%;
    }

    .navbar {
        border-radius: 25px
    }

    .cardWeather img {
        max-width: 90px;
    }

    .cardWeather p {
        text-align: center;
    }
</style>