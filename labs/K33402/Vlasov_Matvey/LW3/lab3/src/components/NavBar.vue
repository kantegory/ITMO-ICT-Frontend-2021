<template>
     <header>
        <b-navbar  toggleable="md" fixed="top">
            <b-navbar-brand href="javascript:void(0)" @click="$router.push('/')">Home4Night</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <theme-toggler />
                    <b-nav-item href="javascript:void(0)" @click="$router.push('/')">Home</b-nav-item>
                    <b-nav-item href="javascript:void(0)" @click="$router.push('search')">
                        <b-icon icon='search' font-scale='0.99'></b-icon>
                        Search
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="javascript:void(0)" @click="$router.push('login')">Log in</b-nav-item>
                    <b-nav-item href="javascript:void(0)" @click="$router.push('signup')">Sign up</b-nav-item>
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
    }
}
</script>

<style scoped>
 .navbar-brand, a {
    color: var(--color-navbar) !important;
}

.navbar {
    background-color: var(--background-color-navbar)
}
</style>
