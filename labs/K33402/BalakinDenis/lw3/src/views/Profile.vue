<template>
    <main class="d-flex justify-content-around mt-5">
        <ProfileInfo />
        <ProfileTickets />
    </main>

</template>

<script>
    import ProfileInfo from "@/components/ProfileInfo";
    import ProfileTickets from "@/components/ProfileTickets";
    export default {
        name: "Profile",
        components: {ProfileTickets, ProfileInfo}
    }
</script>

<style scoped>

</style>
