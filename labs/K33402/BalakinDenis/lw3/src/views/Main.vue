<template>
    <main class="d-flex flex-column align-items-center justify-content-center mt-5">
        <MainSearch />
        <ResultTickets />
    </main>
</template>

<script>
    import MainSearch from "@/components/MainSearch";
    import ResultTickets from "@/components/ResultTickets";
    export default {
        name: "Main",
        components: {ResultTickets, MainSearch}
    }
</script>

<style scoped>

</style>
