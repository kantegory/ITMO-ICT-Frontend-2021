<template>
    <b-form @submit.prevent="login">
        <div class="form-group">
            <label for="username">Логин:</label>
            <b-input v-model="form.username" type="text" id="username" placeholder="Логин..."></b-input>
        </div>
        <div class="form-group">
            <label for="password">Пароль:</label>
            <b-input v-model="form.password" type="password" id="password" placeholder="Пароль..."></b-input>
        </div>
        <b-button variant="primary" type="submit">Войти</b-button>
        <p class="mt-3">Ещё не зарегистрированы?
            <router-link to="/signup">Регистрация</router-link>
        </p>
    </b-form>
</template>

<script>

    import {postToken} from "@/http/userApi/postToken";

    export default {
        name: "SignInForm",
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
                postToken(this.form.username,this.form.password);
            }
        }

    };
</script>

<style scoped>
.form-group {
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>