<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="">
                    <img src="img/logo.svg" alt="logo" width="25px" class="d-inline-block align-text-top">
                    <span class="fs-4">Weather</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" exact-active-class="active" v-if="this.$store.getters.loggedIn">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/profile" class="nav-link" active-class="active" v-if="this.$store.getters.loggedIn">Profile</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style scoped>

</style>
