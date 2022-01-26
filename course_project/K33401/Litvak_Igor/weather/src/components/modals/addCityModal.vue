<template>
    <div class="modal fade" id="addCityModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add favourite city</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <select class="form-select" aria-label="Default select example" id="city-select">
                        <option v-for="city in this.$store.getters.nonFavouriteCities" :value="city.id" :key="city.id">
                            {{ city.name }}
                        </option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="selectCity">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../store";

export default {
    name: "addCityModal",
    methods: {
        selectCity: function () {
            let city = document.querySelector("#city-select").value;
            store.dispatch('addFavouriteCity', city);
        }
    },
    created() {
        store.dispatch('listAllCities');
        store.dispatch('listFavouriteCities');
    }
}
</script>

<style scoped>

</style>
