<template>
    <div id="app" class="d-flex flex-column min-vh-100">
        <Navigation></Navigation>
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
</style>
