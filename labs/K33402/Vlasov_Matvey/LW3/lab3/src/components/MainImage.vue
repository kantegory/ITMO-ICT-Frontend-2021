<template>
    <b-col md=4>
        <img class="img-fluid" :src="require(`@/assets/img/${img}`)">
        <figcaption>{{ caption }}</figcaption>
    </b-col>
</template>

<script>
export default {
    name: 'Image',

    props: {
        img: String,
        caption: String
    }
}
</script>

<style scoped>
figcaption {
    font-size: 1.5rem;
}
</style>
