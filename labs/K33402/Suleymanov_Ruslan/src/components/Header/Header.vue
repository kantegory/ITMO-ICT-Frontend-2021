<template>
    <header>
        <b-navbar toggleable="lg">
            <b-navbar-brand tag="router-link" :to="{ path: '/' }">
                <img style="height: 50px; margin-left: 20px"
                        src="../../assets/logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-if="isAuthenticated">
                        <router-link class="link" to="/">
                            Home
                        </router-link>
                    </b-nav-item>
                    <b-nav-item v-if="isAuthenticated">
                        <router-link class="link" :to="{name: 'Example'}">Example</router-link>
                    </b-nav-item>
                    <b-nav-item v-if="isAuthenticated">
                        <router-link class="link" :to="{name: 'Profile'}">Profile</router-link>
                    </b-nav-item >
                    <b-nav-item v-if="!isAuthenticated">
                        <router-link class="link" :to="{name: 'SignIn'}">SignIn</router-link>
                    </b-nav-item>
                    <b-nav-item v-if="!isAuthenticated">
                        <router-link class="link" :to="{name: 'SignUp'}">SignUp</router-link>
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <SwitcherTheme/>
                </b-navbar-nav>
            </b-collapse>
            <CurrentWeather />
        </b-navbar>
    </header>
</template>

<script>
    import SwitcherTheme from "@/components/Header/SwitcherTheme";
    import CurrentWeather from "@/components/Header/CurrentWeather";
    import {mapGetters} from "vuex";

    export default {
        name: "Header",
        components: {CurrentWeather, SwitcherTheme},
        component: {
            SwitcherTheme,
            CurrentWeather
        },
        computed: {
            ...mapGetters({
                isAuthenticated: 'isAuthenticated',
            })
        },
    }
</script>

<style scoped>

</style>