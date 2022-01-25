<template>
    <div id="theme_page">
        <Theme theme={store.state.theme} />
    </div>
</template>

<script>
    import Theme from "@/components/Theme";

    export default {
        name: "ThemePage",
        components: {
            Theme,
        }
    }
</script>

<style scoped>

</style>