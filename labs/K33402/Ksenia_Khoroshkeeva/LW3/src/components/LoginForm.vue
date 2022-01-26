<template>
    <form @submit.prevent="login">
        <div class="form-group my-3 mx-5">
            <label for="username">Ник</label>
            <input v-model="form.username" required type="text" class="form-control" id="username" placeholder="Введите ваш ник">
        </div>
        <div class="form-group my-3 mx-5">
            <label for="Password">Пароль</label>
            <input v-model="form.password" required type="password" class="form-control" id="Password" placeholder="Введите пароль">
        </div>
        <button type="submit" class="btn btn-primary my-3 mx-5">Войти</button>
        <router-link class="btn btn-outline-primary" to="/registration">Зарегистироваться</router-link>
    </form>
</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            login() {
                this.$store.dispatch('Login', this.form);
            }
        }
    }
</script>

<style scoped>

</style>