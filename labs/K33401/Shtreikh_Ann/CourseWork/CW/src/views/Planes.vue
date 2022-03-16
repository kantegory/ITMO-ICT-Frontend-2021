<template>
 <section>
    <h1 style="margin:20px">Список наших самолетов</h1>
    <v-row>
     <v-col cols="5" class="mx-auto">
       <v-card
         elevation="2"
         class="px-10 py-5"
         color="white"
       >
         <planes-list :planes="planes" />
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
import PlanesList from '@/components/PlanesList.vue'
import axios from 'axios'

export default {
 name: 'Planes',
 
 components: {
   PlanesList,
 },
 
 
 data: () => ({
   planes: [],

 }),
 

 methods: {
     async PlanesList () {
      try {
        const response = await axios
            .get('http://127.0.0.1:8000/planes/all')
        if (response.status !== 200) {
          throw new Error(response.status)
        }
        this.planes = response.data
        return response.data
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    },
 },
 
 created () {
   this.PlanesList()
    }
}
</script>
 
<style>

</style>
