<template>
 <section>
    <h1 style="margin:20px">Наши пассажиры</h1>
    <v-row>
     <v-col cols="4" class="mx-auto">
       <v-card
         elevation="2"
         class="px-10 py-5"
         color= "#3f57c4bb"
         dark
       >
         <passengers-list :passengers="passengers" />
       </v-card>
       <br>
       <v-btn
            color="accent"
            class="mb-3 mr-3"
            @click="$router.push(`/`)"
            >На главную</v-btn
          >
     </v-col>
   </v-row>

 </section>
</template>
 
<script>
import PassengersList from '@/components/PassengersList.vue'
import axios from 'axios'

export default {
 name: 'Passengers',
 
 components: {
   PassengersList,
 },
 
 
 data: () => ({
   passengers: [],

 }),
 

 methods: {
     async PassengersList () {
      try {
        const response = await axios
            .get('http://127.0.0.1:8000/passengers/all')
        if (response.status !== 200) {
          throw new Error(response.status)
        }
        this.passengers = response.data
        return response.data
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    },
 },
 
 created () {
   this.PassengersList()
    }
}
</script>
 
<style>

</style>