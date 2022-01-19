<template>
    <section class="w-50 h-75">
        <h2>Ваши билеты</h2>
        <div class="card d-flex flex-row align-items-center mb-3 " >
            <img src="../assets/DP.png" class="w-25" alt="pobeda">
            <div class="card-body">
                <h4 class="card-title">Санкт-Петербург LED - Москва DME</h4>
                <div class="d-flex justify-content-between align-items-center mt-4">
                    <div class="d-flex flex-column">
                        <h5 class="card-text">20:00</h5>
                        <p class="card-text">20.10.2021,<br/>СПб, Ср</p>
                    </div>
                    <div class="d-flex">
                        <p>LED</p>
                        <p>В пути 1ч 25м</p>
                        <p>DME</p>
                    </div>
                    <div class="d-flex flex-column">
                        <h5 class="card-text">22:00</h5>
                        <p class="card-text">20.10.2021,<br/>МСК, Ср</p>
                    </div>
                </div>
                <div class="price d-flex justify-content-between align-items-center">
                    <span>Цена за билет: 4000руб</span>
                    <button class="btn text-white bg-orange">Вернуть билет</button>
                </div>
            </div>
        </div>
        <div class="card d-flex flex-row align-items-center mb-3 " >
            <img src="../assets/DP.png" class="w-25" alt="pobeda">
            <div class="card-body">
                <h4 class="card-title">Санкт-Петербург LED - Москва DME</h4>
                <div class="d-flex justify-content-between align-items-center mt-4">
                    <div class="d-flex flex-column">
                        <h5 class="card-text">20:00</h5>
                        <p class="card-text">20.10.2021,<br/>СПб, Ср</p>
                    </div>
                    <div class="d-flex">
                        <p>LED</p>
                        <p>В пути 1ч 25м</p>
                        <p>DME</p>
                    </div>
                    <div class="d-flex flex-column">
                        <h5 class="card-text">22:00</h5>
                        <p class="card-text">20.10.2021,<br/>МСК, Ср</p>
                    </div>
                </div>
                <div class="price d-flex justify-content-between align-items-center">
                    <span>Цена за билет: 4000руб</span>
                    <button class="btn text-white bg-orange">Вернуть билет</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ProfileTickets"
    }
</script>

<style scoped>
    .bg-orange {
        background: var(--btn-color);
        padding-left: 20px;
        padding-right: 20px;
    }
    .card {
        background: var(--body-color);
        color: black;
        border-radius: 25px;
        padding: 0 10px;
        margin-top: 20px;

    }
    .card img {
        height: 50px;
    }
    .card .price {
        margin-top: 10px;
    }
</style>
