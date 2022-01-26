<template>
    <form @submit.prevent="registration">
        <div class="form-group my-3 mx-5">
            <label for="username">Ваш ник</label>
            <input required v-model="form.username" type="text" class="form-control" id="username" placeholder="Введите ваш ник">
        </div>
        <div class="form-group my-3 mx-5">
            <label for="Name">Ваше имя</label>
            <input v-model="form.first_name" type="text" class="form-control" id="Name" placeholder="Введите имя">
        </div>
        <div class="form-group my-3 mx-5">
            <label for="lastName">Ваша фамилия</label>
            <input v-model="form.last_name" type="text" class="form-control" id="lastName" placeholder="Введите фамилию">
        </div>
        <div class="form-group my-3 mx-5">
            <label for="city">Ваш город</label>
            <v-select
                    id="city"
                    @input="setSelected"
                    :options="cities"
                    :value="selectedCity"
                    label="name"
                    placeholder="Город"></v-select>
        </div>
        <div class="form-group my-3 mx-5">
            <label for="Password">Пароль</label>
            <input required v-model="form.password" type="password" class="form-control" id="Password" placeholder="Введите пароль">
        </div>
        <button type="submit" class="btn btn-primary my-3 mx-5">Зарегистрироваться</button>
        <router-link class="btn btn-outline-primary my-3" to="/login">Войти</router-link>
    </form>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "RegistrationForm",
        data() {
            return {
                form: {
                    username: "",
                    first_name: "",
                    last_name: "",
                    password: "",
                    city: ""
                },
                selectedCity: ''
            };
        },
        computed: {
            ...mapGetters({
                cities: 'cities',
            })
        },
        mounted() {
            this.$store.dispatch('getCities')
        },
        methods: {
            registration() {
                this.$store.dispatch('Registration', this.form);
            },
            setSelected(val) {
                this.selectedCity = val.name
                this.form.city = val.id
            }
        }
    }
</script>

<style scoped>

</style>