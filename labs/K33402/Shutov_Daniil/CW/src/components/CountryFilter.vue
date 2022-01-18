<template>
    <div class="filter row">
        <h5 style="margin-left: 15px">Фильтр по странам</h5>
        <div class="">
            <button @click="setFilter('RU')"  v-bind:class="[filterCountry==='RU' ? 'activeClass' : '', ' list-group-item list-group-item-action']">Россия</button>
            <button @click="setFilter('UA')"  v-bind:class="[filterCountry==='UA' ? 'activeClass' : '', ' list-group-item list-group-item-action']">Украина</button>
            <button @click="setFilter('US')"  v-bind:class="[filterCountry==='US' ? 'activeClass' : '', ' list-group-item list-group-item-action']">Сша</button>
            <button @click="setFilter('')" class="list-group-item list-group-item-action">Очистить фильтр</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CountryFilter",
        methods: {
            setFilter(country) {
                this.$store.commit('setFilterCountry',country)
            }
        },
        computed: {
            ...mapGetters({
                filterCountry: 'filterCountry'
            })
        },
    }
</script>

<style scoped>
    .list-group-item {
        border: inherit;
    }
    .activeClass {
        background: rgba(0,0,0,0.05);
    }
    .filter{
        margin-top: 30px;
        margin-right: 30px;
        box-shadow: 2px 5px 10px rgba(0 0 0 0.1);
        border-radius: 20px;
        border: 1px solid rgba(0,0,0,0.05);
        padding: 10px;
    }
</style>