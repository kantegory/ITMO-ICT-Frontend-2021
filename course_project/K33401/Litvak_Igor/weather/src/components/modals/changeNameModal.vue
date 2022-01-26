<template>
    <div class="modal fade" id="changeNameModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Change name</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-2 justify-content-center">
                        <div class="col-12 col-md-8">
                            <label for="first_name" class="form-label">First name</label>
                            <input v-model="form.first_name" class="form-control" type="text" id="first_name">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="last_name" class="form-label">Last name</label>
                            <input v-model="form.last_name" class="form-control" type="text" id="last_name">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="onSubmit(form)">Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../store";

export default {
    name: "changeNameModal",
    data() {
        return {
            form: {
                first_name: "",
                last_name: "",
            }
        };
    },
    methods: {
        onSubmit(form) {
            store.dispatch('changeName', form)
        }
    }
}
</script>

<style scoped>

</style>
