<template>

    <div class="input_page">
        <h4>Выберите интересубщий город</h4>
        <div class="w-25 m-auto">
            <v-select
                    @search="onSearch"
                    @input="setSelected"

                    :options="cities"
                    :value="city"
                    label="name"
                    placeholder="Город"></v-select>
            <button @click="someClick">Узнать погоду</button>
        </div>
    </div>
</template>

<script>
    import {getCityList} from "@/http/getCityList";
    import {mapGetters} from 'vuex';

    export default {
        name: "AddNewCity",
        computed: {
            ...mapGetters({
                city: 'city',
                cities: 'cities'
            })
        },
        data() {
            return {
            }
        },
        mounted: function () {
            getCityList('')
        },
        methods: {
            onSearch(search) {
                if(search.length) {
                    getCityList(search)
                }
            },
            someClick() {
                this.$store.dispatch('getMetcastCity')
            },
            /**
             * deleteItem,
             * @constructor
             * @param {string} val - значение в строке поиска
             */
            setSelected (val) {
                this.$store.commit('addCity', val)
            }
        },

    }

</script>

<style scoped>
    .input_page {
        margin-bottom: 50px;
    }
    button {
        margin-top: 20px;
        border: 1px solid black;
        border-radius: 5px ;
    }
    .v-select {
        background: white;

    }
</style>