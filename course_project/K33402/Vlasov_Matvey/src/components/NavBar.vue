<template>
     <header>
        <b-navbar  toggleable="md" fixed="top">
            <b-navbar-brand to="/">Home4Night</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <theme-toggler />
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/search">
                        <b-icon icon='search' font-scale='0.99'></b-icon>
                        Search
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <template v-if="this.$store.state.isLogged">
                        <button v-on:click="logout">Log out</button>
                        <b-nav-item to="/profile">Profile</b-nav-item>
                    </template>
                    <template v-else>
                        <b-nav-item to="/login">Log in</b-nav-item>
                        <b-nav-item to="/signup">Sign up</b-nav-item>
                    </template>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
import ThemeToggler from '@/components/ThemeToggler.vue'

export default {
    name: 'NavBar',
    components: {
        ThemeToggler
    },
    methods: {
        logout () {
            localStorage.removeItem('authToken')
            this.$store.commit('isLoggedUpdate', {
                authToken: '',
                id: '',
                username: '',
                firstName: '',
                lastName: '',
                role: ''
            })
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
 .navbar-brand, a, button {
    color: var(--color-navbar) !important;
}

.navbar {
    background-color: var(--background-color-navbar)
}
</style>
