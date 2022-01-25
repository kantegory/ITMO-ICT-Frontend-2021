<template>
    <b-form @submit.prevent="reg">
        <div class="form-group">
            <label for="username">Логин:</label>
            <b-input v-model="form.username" type="text" id="username" placeholder="Логин..."></b-input>
        </div>
        <div class="form-group">
            <label for="password">Пароль:</label>
            <b-input v-model="form.password" type="password" id="password" placeholder="Пароль..."></b-input>
        </div>
        <div class="form-group">
            <label for="re_password">Пароль:</label>
            <b-input v-model="form.re_password" type="password" id="re_password" placeholder="Пароль..."></b-input>
        </div>
        <b-button variant="primary" type="submit">Войти</b-button>
        <p class="mt-3">Уже зарегистрированы?
            <router-link to="/signin">Войдите</router-link>
        </p>
    </b-form>
</template>

<script>
    import {postRegUser} from "@/http/userApi/postRegUser";

    export default {
        name: "SignInForm",
        data() {
            return {
                form: {
                    username: "",
                    password: "",
                    re_password: ""
                }
            };
        },
        methods: {
             reg() {
                 postRegUser(this.form.username,this.form.password, this.form.re_password)
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