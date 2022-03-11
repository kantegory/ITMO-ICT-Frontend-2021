<template>
    <main class="container-fluid">
        <div class="container-fluid">
            <div class="row content">
                <div class="col-lg-11 col-12">
                    <form class="form" @submit.prevent="boom()" method="get">
                        <h3 class="mb-3">Buy the ticket!</h3>
                        <div class="mb-3">
                            <input type="text" id="departure" class="form-control" placeholder="From" v-model="departure">
                        </div>
                        <div class="mb-3">
                            <input type="text" id="arrival" class="form-control" placeholder="To" v-model="arrival">
                        </div>
                        <div class="mb-3">
                            <input type="date" class="form-control" id="date" name="date" placeholder="Date" v-model="date">
                        </div>
                        <div class="mb-3">
                            <input type="time" id="time" class="form-control" placeholder="Time" v-model="time">
                        </div>

                        <div class="mb-3">
                            <select id="country" class="form-select form-select-lg form-control" v-model="country">
                                <option selected>Country</option>
                                <option value="1">Russia</option>
                                <option value="2">China</option>
                                <option value="3">Germany</option>
                                <option value="4">Finland</option>
                                <option value="5">Sweden</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select id="aviacompany" class="form-select form-select-lg form-control" v-model="aviacompany">
                                <option selected>Aviacompany</option>
                                <option value="1">Very honest aviacompany</option>
                                <option value="2">Finair</option>
                                <option value="3">Air France</option>
                                <option value="4">Emirates</option>
                                <option value="5">Lufthansa</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select id="personal_class" class="form-select form-select-lg form-control" v-model="personal_class">
                                <option selected>Class</option>
                                <option value="1">Business class</option>
                                <option value="2">First class</option>
                                <option value="3">Economy</option>
                                <option value="4">Luggage</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select id="price" class="form-select form-select-lg form-control" v-model="price">
                                <option selected>Price</option>
                                <option value="1">Less than 100$</option>
                                <option value="2">From 100$ to 300$</option>
                                <option value="3">From 300$ to 500$</option>
                                <option value="4">From 500$ to 1000$</option>
                                <option value="5">More than 1000$</option>
                            </select>
                        </div>
                        <div>
                            <a href="" class="btn btn-class" v-on:click="boom">Search for flight</a>
                        </div>
                    </form>
                </div>
                <div class="col-lg-7 mt-5 col-12 surf">
                    <div class="col-lg-1 col-md-6 col-sm-12 card-centered justify-content-center" v-for="f in tata" :key="f.id">
                        <div class="card">
                            <img src="../../public/flying_stuff/card_back.jpg" class="card-img-top" alt="image">
                            <div class="card-body">
                                <h5 class="card-title">{{f.departure}} - {{f.arrival}}</h5>
                                <p class="card-text">Datetime: {{f.date}} {{f.time}}</p>
                                <p class="card-text">Country: {{f.country}}</p>
                                <p class="card-text">Aviacompany: {{f.aviacompany}}</p>
                                <p class="card-text">Personal Class: {{f.personal_class}}</p>
                                <p class="card-text">Price: {{f.price}}</p>
                                <a href='#' class='btn btn-class'>Register to flight</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BuyBody',
  data: () => ({
    departure: null,
    arrival: null,
    form: null,
    date: null,
    time: null,
    country: null,
    aviacompany: null,
    personal_class: null,
    price: null,
    json: null,
    new_url: '',
    tata: []
  }),
  methods: {
    boom: function () {
      axios.get(`http://localhost:3000/tickets?departure=${this.departure}&arrival=${this.arrival}&date=${this.date}&time=${this.time}&country=${this.country}&aviacompany=${this.aviacompany}&personal_class=${this.personal_class}&price=${this.price}`).then(response => {
        console.log('good')
        this.tata = response.data
      })
      console.log(this.tata)
    }
  }
}
</script>

<style scoped>
    .surf {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>
