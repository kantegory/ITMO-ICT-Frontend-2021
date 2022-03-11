<template>
    <section class="d-flex flex-column align-items-start w-25">
        <h3>Балакин Денис</h3>
        <img class="w-100 avatar mb-2" src="../assets/аватар.jpg" alt="аватар">
        <p class="mb-1">
            <svg>
                <use xlink:href='#ruble'></use>
            </svg>
            Баланс: 100к рублей
        </p>
        <p class="mb-1">
            <svg>
                <use xlink:href='#coins'></use>
            </svg>
            Бонусы: 10000</p>
        <p class="mb-1">
            <svg>
                <use xlink:href='#plane'></use>
            </svg>
            Количество полетов: 15
        </p>
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
    svg {
        width: 30px;
        max-height: 50px;
        margin-right: 20px;
        fill:  var(--body-color);
    }
</style>
