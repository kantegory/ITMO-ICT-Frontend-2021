<template>
    <div id="app" class="d-flex flex-column min-vh-100">
        <Navigation></Navigation>
        <main class="mx-2 my-3">
            <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";

export default {
    name: 'App',
    components: {
        Navigation,
        Footer
    }
}
</script>

<style lang="scss">
$primary: #12e3a9;
@import '../node_modules/bootstrap/scss/bootstrap';

body {
    overflow-y: scroll;
}

.hover-opacity {
    opacity: 0.6;
    cursor: pointer;
}

.hover-opacity:hover {
    opacity: 1;
}

.today-img-container {
    width: 180px;
    height: 180px;
    position: relative;
    margin: auto;
}

.week-img-container {
    width: 50px;
    height: 50px;
    position: relative;
    margin: auto;
}

.img-icon {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
