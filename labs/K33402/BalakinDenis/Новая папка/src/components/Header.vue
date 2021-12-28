<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <router-link class="navbar-brand text-white" to="/">
                    АВИАБИЛЕТЫ У ДЕНИСА
                </router-link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link text-white" to="/">
                                Главная
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" to="/profile">
                                Профиль
                            </router-link>
                        </li>
                    </ul>
                    <div class="d-flex ">
                        <router-link class="btn text-white bg-orange m-2" to="/login">
                            Login
                        </router-link>
                        <router-link class="btn text-white bg-orange m-2" to="/register">
                            Register
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .bg-orange {
        background: #ff6f32;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
