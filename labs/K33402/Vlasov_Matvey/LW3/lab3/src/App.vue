<template>
    <div>
        <NavBar />
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import '@/assets/styles/light.css'
import '@/assets/styles/dark.css'

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        Footer
    }
}
</script>

<style>
body {
    padding-top: 3.5rem;
    color: var(--color-main) !important;
}

main {
    background-color: var(--background-color);
}

p {
    text-align: justify;
}

button, [type=button], [type=reset], [type=submit], [role=button] {
    color: white !important;
}
</style>
