<template>
    <div class="row g-2 justify-content-center">
        <div class="col-12 col-md-6">
            <div class="card bg-light">
                <div class="card-header">
                    <h5>Register</h5>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubmit(form)" class="row g-2 justify-content-center">
                        <div class="col-12 col-md-8">
                            <label for="username" class="form-label">Username</label>
                            <input v-model="form.username" class="form-control" type="text" id="username">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="first_name" class="form-label">First name</label>
                            <input v-model="form.first_name" class="form-control" type="text" id="first_name">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="last_name" class="form-label">Last name</label>
                            <input v-model="form.last_name" class="form-control" type="text" id="last_name">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password" class="form-label">Password</label>
                            <input v-model="form.password" class="form-control" type="password" id="password">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password2" class="form-label">Repeat password</label>
                            <input class="form-control" type="password" id="password2">
                        </div>
                        <div class="col-12 col-md-8">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <router-link to="/login" class="link-secondary">Already have an account?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router";

export default {
    name: "Register",
    data() {
        return {
            form: {
                username: "",
                first_name: "",
                last_name: "",
                password: "",
            }
        };
    },
    methods: {
        onSubmit(form) {
            if (document.getElementById("password").value === document.getElementById("password2").value) {
                this.$store.dispatch('register', form).then(function () {
                    router.push('/login');
                });
            }
        }
    },
}
</script>

<style scoped>

</style>
