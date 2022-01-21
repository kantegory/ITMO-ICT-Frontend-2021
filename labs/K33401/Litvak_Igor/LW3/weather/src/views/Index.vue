<template>
    <div>
        <h1 class="display-4">
            Weather forecast for <span class="hover-opacity" data-bs-toggle="modal" data-bs-target="#cityModal">
        <span id="selected-city">St. Petersburg</span>
        <img src="img/edit-pen.svg" alt="edit" width="40px"></span>
        </h1>

        <div class="row g-2">
            <!-- Weather today -->
            <div class="col-12 col-lg-5">
                <div class="card">
                    <div class="card-header">
                        <h2 class="fs-4">Weather today</h2>
                    </div>
                    <div class="card-body" id="weather-today">
                        <!-- This inner HTML will be filled by script -->
                        <div class="row g-4">
                            <div class="col-sm-6">
                                <div class="today-img-container">
                                    <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <h3>...℃</h3>
                                <p class="fs-4">...</p>
                                <p class="fs-4">wind ... m/s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Weather this week -->
            <div class="col-12 col-lg-7">
                <div class="card">
                    <div class="card-header">
                        <h2 class="fs-4">Weather this week</h2>
                    </div>
                    <div class="card-body" id="weather-week">
                        <div class="table-responsive">
                            <table class="table table-borderless text-center align-middle">
                                <tr>
                                    <th>...</th>
                                    <th>...</th>
                                    <th>...</th>
                                    <th>...</th>
                                    <th>...</th>
                                    <th>...</th>
                                    <th>...</th>
                                </tr>
                                <tr>
                                    <td>...℃</td>
                                    <td>...℃</td>
                                    <td>...℃</td>
                                    <td>...℃</td>
                                    <td>...℃</td>
                                    <td>...℃</td>
                                    <td>...℃</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="week-img-container">
                                            <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="week-img-container">
                                            <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="week-img-container">
                                            <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="week-img-container">
                                            <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="week-img-container">
                                            <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="week-img-container">
                                            <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="week-img-container">
                                            <img src="img/weather-icons/default.svg" alt="loading" class="img-icon">
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
