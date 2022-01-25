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
                        <option value="" selected>Autodetect</option>
                        <option value="St. Petersburg">St. Petersburg</option>
                        <option value="Moscow">Moscow</option>
                        <option value="Sochi">Sochi</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="selectCity">Ok</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
function putLocationToStorage(city, lat, lon) {
    // Save selected city and coordinates to session storage
    console.log(lat, lon);
    sessionStorage.setItem("city", city);
    sessionStorage.setItem("lat", lat);
    sessionStorage.setItem("lon", lon);
    document.location.reload();
}

export default {
    name: "chooseCityModal",
    methods: {
        selectCity: function () {
            let city = document.querySelector("#city-select").value;
            switch (city) {
                case "St. Petersburg":
                    putLocationToStorage(city, 59.937500, 30.308611);
                    break;
                case "Moscow":
                    putLocationToStorage(city, 55.751244, 37.618423);
                    break;
                case "Sochi":
                    putLocationToStorage(city, 43.588348, 39.729996);
                    break;
                default:
                    navigator.geolocation.getCurrentPosition(function (location) {
                        // User allowed location
                        putLocationToStorage("", location.coords.latitude, location.coords.longitude);
                    }, function () {
                        // User disallowed location, set default value to St. Petersburg
                        putLocationToStorage("St. Petersburg", 59.937500, 30.308611);
                    });
                    break;
            }
        }
    }
}
</script>

<style scoped>

</style>
