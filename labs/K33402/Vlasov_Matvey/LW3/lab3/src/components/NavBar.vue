<template>
     <header>
        <nav class="navbar navbar-expand-md fixed-top">
            <a class="navbar-brand" href="main.html">Home4Night</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain"
                aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <ThemeToggler />
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="main.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="search.html">
                            <b-icon icon="search" font-scale="0.99"></b-icon>
                            Search
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Log in</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="signup.html">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
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
.nav-item a, .navbar-brand {
    color: var(--color-navbar) !important;
}

.navbar {
    background-color: var(--background-color-navbar)
}
</style>
