<template>
    <div class="row g-2">
        <div class="col-12 col-md-7">
            <div class="card">
                <div class="card-header">
                    <h2>Your account</h2>
                </div>
                <div class="card-body">
                    <p class="fs-5">Name: <span class="hover-opacity" data-bs-toggle="modal" data-bs-target="#changeNameModal">
                        {{ this.$store.state.user.first_name }} {{ this.$store.state.user.last_name }}
                        <img src="img/edit-pen.svg" alt="edit" width="12px" class="d-inline-block"></span>
                    </p>
                    <p class="fs-5"><span class="hover-opacity" data-bs-toggle="modal" data-bs-target="#changePasswordModal">
                        Change password
                        <img src="img/edit-pen.svg" alt="edit" width="12px" class="d-inline-block"></span>
                    </p>
                    <p class="fs-5"><span class="hover-opacity" v-on:click="logout">Logout</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-5">
            <div class="card">
                <div class="card-header">
                    <h2>Your favourite cities</h2>
                </div>
                <div class="card-body">
                    <div class="d-inline-flex flex-wrap">
                        <div class="btn-group p-2" v-for="city in this.$store.state.rawFavouriteCities" :key="city.id">
                            <button type="button" class="btn btn-secondary">{{ city.city.name }}</button>
                            <button type="button" class="btn btn-outline-secondary" v-on:click="deleteCity(city.id)">X</button>
                        </div>
                        <div class="p-2">
                            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
                                    data-bs-target="#addCityModal">+
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <add-city-modal></add-city-modal>
        <change-name-modal></change-name-modal>
        <change-password-modal></change-password-modal>
    </div>
</template>

<script>
import AddCityModal from "../components/modals/addCityModal";
import ChangeNameModal from "../components/modals/changeNameModal";
import ChangePasswordModal from "../components/modals/changePasswordModal";
import store from "../store";
import router from "../router";

export default {
    name: "Profile",
    components: {ChangePasswordModal, ChangeNameModal, AddCityModal},
    methods: {
        deleteCity: function (city_id) {
            store.dispatch('deleteFavouriteCity', city_id);
        },
        logout: function () {
            store.dispatch('logout').then(function () {
                router.push('/login');
            });
        }
    }
}
</script>

<style scoped>

</style>
