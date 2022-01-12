<template>
    <div class="body">
        <form @submit.prevent="onSubmit(form)" class="container form">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputUsername" class="form-label">Username</label>
                <input v-model="form.username" type="text" class="form-control" id="exampleInputUsername"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
                <input v-model="form.re_password" type="password" class="form-control" id="exampleInputPasswordRepeat"/>
            </div>
            <button type="submit" class="btn btn-success">Зарегистрироваться</button>
            <p>Уже есть аккаунт?</p>
            <router-link to="/signin">
                <button class="btn btn-success">Войдите</button>
            </router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data() {
            return {
                form: {
                    email: "",
                    username: "",
                    password: "",
                    re_password: ""
                }
            };
        },
        methods: {
            onSubmit(form) {
                this.$store.dispatch('onSubmitSignUp', form)
            }
        },
    }
</script>

<style scoped>
    .body {
        min-height: calc(100vh - 80px);
    }

    .form {
        width: 320px;
        background: #E2E2E2;
        border-radius: 20px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
        padding: 30px;
        margin-top: 150px;
    }
</style>
