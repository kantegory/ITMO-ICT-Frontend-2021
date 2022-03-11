<template>
    <div class="accordion mt-3" role="tablist">
        <h5>Добавьте город в закреп</h5>

        <b-card no-body class="mb-1 my-bg-indigo" v-for="(country, index) in countries" :key="index">
            <b-card-header block v-b-toggle="`accordion-${index}`" header-tag="header" class="p-1" role="tab">
                <b-button variant="light">{{ country.name }}</b-button>
            </b-card-header>
            <b-collapse :id="`accordion-${index}`" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <div v-for="(city, index) in country.cities" :key="index">
                        <hr v-if="index!==0"/>
                        <b-card-text class="d-flex justify-content-between align-content-center mb-0">
                            <b-button variant="light">{{city.name}}</b-button>
                            <b-button v-on:click="addCity(city.id)">Добавить</b-button>
                        </b-card-text>
                    </div>
                </b-card-body>
            </b-collapse>
        </b-card>

    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Accordion",
        computed: {
            ...mapGetters({
                countries: 'countries',
            })
        },
        methods: {
            addCity(val) {
                this.$store.dispatch('addUserCity', {city: val})
            }
        },
        mounted() {
            this.$store.dispatch('getCountries')
        },

    }
</script>

<style scoped>
    .my-bg-indigo {
        background-color: #e7b9ff;
    }
</style>