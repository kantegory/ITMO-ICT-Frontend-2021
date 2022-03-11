<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "PreferencesCityList",
        mounted() {
            this.$store.dispatch('preferencesCityList')
        },
    }
</script>

<style scoped>

</style>