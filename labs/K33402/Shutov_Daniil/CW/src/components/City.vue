<template>
    <div class="mt-4">
        <h3>{{ city.name }}</h3>
        <div class="d-flex flex-row">
            <div class="col-lg-2 me-5 cardWeather " v-for="(weatherDay, index) in week" :key="index">
                <div class="row justify-content-center">
                    <p><span class="date">{{date[index]}}</span></p>
                    <p>Погода: <span class="temp"></span>{{weatherDay.main.temp}}°C</p>
                    <p>Влажность: <span class="humidity"></span>{{weatherDay.main.humidity}}%</p>
                    <p>Ветер: <span class="wind"></span>{{ weatherDay.wind.speed }} км/ч</p>
                    <p><span class="wearther">{{ weatherDay.weather[0].main }}</span></p>
                </div>
            </div>
        </div>
        <button v-if="add===true" @click="addCity(id)" type="submit" class="mt-5 pt- btn btn-success">Закрепить</button>
        <button v-else @click="removeCity(id)" type="submit" class="mt-5 pt- btn btn-warning">Открепить</button>
        <hr/>
    </div>
</template>

<script>
    import axios from 'axios'
    const a = new Date()

    export default {
        name: "City",
        props: ['city', 'apiKey', 'id', 'add'],
        data: () => ({
            week: [],
            date: [],
            month: a.getMonth()
        }),
        methods: {
            addCity(id) {
                this.$store.dispatch('addCity', id)
            },
            removeCity(id) {
                this.$store.dispatch('removeCity', id)
            }
        },
        mounted () {
            axios
                .get(`http://api.openweathermap.org/data/2.5/forecast?id=${this.city.id}&appid=${this.apiKey}&units=metric`)
                .then(response => {
                        for (let i = 0; i < 5; i++) {
                            let weatherDay = (response.data.list[i])
                            this.week.push(weatherDay)

                            let today = (a.getDay() + i)%7
                            if (today === 0) {
                                this.date.push('Воскресенье')
                            }
                            if (today === 1) {
                                this.date.push('Понедельник')
                            }
                            if (today === 2) {
                                this.date.push('Вторник')
                            }
                            if (today === 3) {
                                this.date.push('Среда')
                            }
                            if (today === 4) {
                                this.date.push('Четверг')
                            }
                            if (today === 5) {
                                this.date.push('Пятница')
                            }
                            if (today === 6) {
                                this.date.push('Суббота')
                            }
                        }
                    }
                )
        }
    }
</script>

<style scoped>
    .cardWeather{
        background: #FFFFFF;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        /*max-width: 137px;*/
        margin-top: 50px;
        margin-bottom: 10px;
        padding: 10px;
    }
</style>