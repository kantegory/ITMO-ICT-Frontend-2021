<template>
    <section class="d-flex flex-column align-items-center mt-5">
        <h1 class="mt-5">Поиск дешёвых авиабилетов у Дениса</h1>
        <strong class="">Лучший способ купить авиабилеты дёшево - у Дениса</strong>
        <form @submit.prevent="search" name="filter" class="d-flex flex-column align-items-center justify-content-center" id="form">
            <div class="d-flex">
                <input v-model="form.start" name="start" type="text" class="ticket_input" placeholder="Откуда"/>
                <input v-model="form.end" name="end" type="text" class="ticket_input" placeholder="Куда"/>
                <input v-model="form.dateStart" name="dateStart" type="date" class="ticket_input" placeholder="Когда"/>
                <input v-model="form.dateEnd" name="dateEnd" type="date" class="ticket_input" placeholder="Обратно"/>
                <input v-model="form.count" name="count" type="number" class="ticket_input" placeholder="Пассажиров" />
            </div>
            <button type="submit" class="ticket_submit">Найти билеты</button>
        </form>
    </section>
</template>

<script>
    export default {
        name: "MainSearch",
        data() {
            return {
                form: {
                    start: "",
                    end: "",
                    dateStart: "",
                    dateEnd: "",
                    count: "",
                }
            };
        },
        methods: {
            search() {
                let url = `http://localhost:3000/ticket`;
                if (this.form.start && this.form.end) {
                    url += `?start.city_like=`+ this.form.start+`&end.city_like=`+this.form.end
                } else {
                    if (this.form.end) {
                        url+= `?end.city_like=`+this.form.end
                    }
                    if (this.form.start) {
                        url+= `?start.city_like=`+ this.form.start
                    }
                }

                fetch(url, {
                    method: 'get',
                })
                    .then(res => {
                        return res.json();
                    })
                    .then(json => {
                        this.$store.commit( "setTickets", json)
                        }
                    );
            }
        }
    }
</script>

<style scoped>
    .ticket_submit {
        margin-top: 50px;
        margin-left: 50px;
        padding: 10px 40px;
        height: 50px;
        border: 0;
        border-radius: 10px;
        background: var(--btn-color);
        color: var(--body-color);
        font-size: 20px;
        font-weight: bold;
    }
    .ticket_input {
        margin-top: 50px;
        padding: 10px;
        height: 50px;
        border: 0;
        background: var(--body-color);
        border-right: 2px solid var(--back-color);
    }
    .ticket_input:first-child {
        border-radius: 10px 0 0 10px;
    }
    .ticket_input:last-child {
        border-radius:0 10px 10px 0;
    }
</style>
