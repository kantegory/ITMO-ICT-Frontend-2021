<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light my-bg-indigo">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    Погода Ро$$ии
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Москва" aria-label="Search">
                        <button class="btn btn-outline-dark" type="submit">Поиск</button>
                    </form>
                    <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">
                                Войти
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/registration">
                                Зарегистрироваться
                            </router-link>
                        </li>
                    </ul>
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
    .my-bg-indigo {
        background-color: #e7b9ff;
    }
</style>