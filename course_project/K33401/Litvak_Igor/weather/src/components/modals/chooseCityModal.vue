<template>
    <div class="modal fade" id="chooseCityModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Choose city</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <select class="form-select" aria-label="Default select example" id="city-select">
                        <option value="">Autodetect</option>
                        <option v-for="city in this.$store.state.favouriteCities" :value="city.id" :key="city.id"
                                :selected="city.id == getSelectedCityId">
                            {{ city.name }}
                        </option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="selectCity">Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../store";

export default {
    name: "chooseCityModal",
    methods: {
        selectCity: function () {
            let city = document.querySelector("#city-select").value;
            if (city) {
                store.dispatch('selectCity', city).then(function () {
                    store.dispatch('getForecast', city);
                });
            } else {
                navigator.geolocation.getCurrentPosition(function (location) {
                    // User allowed location
                    store.dispatch('selectClosestCity', location).then(function () {
                        store.dispatch('getForecast', store.state.selectedCity.id);
                    });
                });
            }
        }
    },
    created() {
        store.dispatch('listFavouriteCities');
    },
    computed: {
        getSelectedCityId: function () {
            return store.state.selectedCity ? store.state.selectedCity.id : -1;
        }
    }
}
</script>

<style scoped>

</style>
