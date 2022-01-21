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
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "chooseCityModal"
}
</script>

<style scoped>

</style>
