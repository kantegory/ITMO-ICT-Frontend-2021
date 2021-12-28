<template>
    <section class="d-flex flex-column align-items-start w-25">
        <h3>Балакин Денис</h3>
        <img class="w-100 avatar mb-2" src="../assets/аватар.jpg" alt="аватар">
        <p class="mb-1">Баланс: 100к рублей</p>
        <p class="mb-1">Бонусы: 10000</p>
        <p class="mb-1">Количество полетов: 15</p>
    </section>
</template>

<script>
    export default {
        name: "ProfileInfo"
    }
</script>

<style scoped>
    .avatar {
        border-radius: 25px;
    }
</style>
