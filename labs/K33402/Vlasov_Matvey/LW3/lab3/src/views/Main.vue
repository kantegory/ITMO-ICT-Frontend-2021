<template>
    <main role="main">
        <b-jumbotron>
            <b-container>
                <main-description />
            </b-container>
        </b-jumbotron>

        <b-container class="pb-3">
            <b-row>
                <main-image img="outdoor_getaways.jpg" caption="Outdoor getaways"/>
                <main-image img="unique_stays.jpg" caption="Unique stays"/>
                <main-image img="entire_homes.jpg" caption="Entire homes"/>
            </b-row>
        </b-container>
    </main>
</template>

<script>
import MainDescription from '@/components/MainDescription.vue'
import MainImage from '@/components/MainImage.vue'

export default {
    name: 'Main',
    components: {
        MainDescription,
        MainImage
    }
}
</script>

<style scoped>
.jumbotron {
    background-color: var(--background-color-jumbotron) !important;
}
</style>
