<template>
    <main class="container-fluid">
        <div class="container row mx-auto">
            <div class="col-lg-3 col-md-6 col-sm-12 card-centered justify-content-center" v-for="f in from" :key="f.id">
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
    </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TicketWallBody',
  props: {
    id: [],
    isActive: [],
    departure: [],
    arrival: [],
    date: [],
    time: [],
    country: [],
    aviacompany: [],
    personal_class: [],
    price: []
  },
  mounted () {
    axios.get('http://localhost:3000/tickets').then(response => {
      this.from = response.data
    })
  }
}
</script>

<style scoped>

</style>
