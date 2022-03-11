<template>
    <div class="modal fade" id="changePasswordModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Change password</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-2 justify-content-center">
                        <div class="col-12 col-md-8">
                            <label for="password" class="form-label">Old password</label>
                            <input v-model="form.current_password" class="form-control" type="password"
                                   id="current_password">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password" class="form-label">New password</label>
                            <input v-model="form.new_password" class="form-control" type="password" id="password">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password2" class="form-label">Repeat password</label>
                            <input class="form-control" type="password" id="password2">
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
    name: "changePasswordModal",
    data() {
        return {
            form: {
                current_password: "",
                new_password: ""
            }
        };
    },
    methods: {
        onSubmit(form) {
            if (document.getElementById("password").value === document.getElementById("password2").value) {
                store.dispatch('changePassword', form);
            }
        }
    }
}
</script>

<style scoped>

</style>
