<template>
    <div class="body">
        <form @submit.prevent="onSubmit(form)" class="container form">
            <h3>Вход</h3>
            <div class="mb-3">
                <label for="exampleInputUsername" class="form-label">Username</label>
                <input v-model="form.username" type="Text" class="form-control" id="exampleInputUsername">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-success">Войти</button>
            <p>Еще нет аккаунта?</p>
            <router-link to="/signup">
                <button type="submit" class="btn btn-success">Зарегистрируйтесь</button>
            </router-link>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
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
                this.$store.dispatch('onSubmitSignIn', form)
            }
        },
    }
</script>

<style scoped>
    .form {
        width: 320px;
        background: #E2E2E2;
        border-radius: 20px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
        padding: 30px;
        margin-top: 150px;
    }

    .body {
        min-height: calc(100vh - 80px);
    }
</style>
