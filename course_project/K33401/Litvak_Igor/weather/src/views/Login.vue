<template>
    <div class="row g-2 justify-content-center">
        <div class="col-12 col-md-6">
            <div class="card bg-light">
                <div class="card-header">
                    <h5>Login</h5>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubmit(form)" class="row g-2 justify-content-center">
                        <div class="col-12 col-md-8">
                            <label for="username" class="form-label">Username</label>
                            <input v-model="form.username" class="form-control" type="text" id="username">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password" class="form-label">Password</label>
                            <input v-model="form.password" class="form-control" type="password" id="password">
                        </div>
                        <div class="col-12 col-md-8">
                            <button class="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <router-link to="/register" class="link-secondary">Register</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router";

export default {
    name: "Login",
    data() {
        return {
            form: {
                username: "",
                password: "",
            }
        };
    },
    methods: {
        onSubmit(form) {
            this.$store.dispatch('login', form).then(function () {
                router.push('/');
            });
        }
    },
}
</script>

<style scoped>

</style>
