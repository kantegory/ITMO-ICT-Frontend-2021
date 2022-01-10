<template>
    <div class="home">
        <h1>Прогноз погоды</h1>
        <AddNewCity />
        <MetcastCurrent />
    </div>
</template>

<script>
    import AddNewCity from "@/components/Home/AddNewCity";
    import MetcastCurrent from "@/components/Home/MetcastCurrent";

    export default {

        name: 'HomePage',
        components: {
            MetcastCurrent,
            AddNewCity,
        }
    }
</script>
