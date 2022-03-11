<template>
    <div>
        <NavBar />
        <router-view v-if="isLoaded" />
        <Footer />
    </div>
</template>

<script>
import '@/assets/styles/light.css'
import '@/assets/styles/dark.css'

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import getData from '@/mixins/login.js'

export default {
    name: 'App',

    components: {
        NavBar,
        Footer
    },
    mixins: [getData],
    data: () => ({
        isLoaded: false
    }),

    mounted () {
        this.loadInfo()
    },

    methods: {
        async loadInfo () {
            if (localStorage.getItem('authToken') != null) {
                this.isLoaded = await this.getData(localStorage.getItem('authToken'))
            } else this.isLoaded = true
        }
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
