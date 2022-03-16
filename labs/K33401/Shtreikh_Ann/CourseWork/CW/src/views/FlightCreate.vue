<template>
  <div class="add">
    <h1 style="margin:20px">Добавить рейс</h1>
    <v-form
      @submit.prevent="FlightCreate"
      ref="addForm"
      class="my-2"
    >
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-select
            label="Самолет"
            v-model="addForm.plane"
            :items="planes"
            item-text="model"
            item-value="id"
            >
          </v-select>
          <v-text-field
            v-model="addForm.number"
            label="Номер"
          ></v-text-field>
          <v-text-field
            v-model="addForm.gate"
            label="Гейт"
          ></v-text-field>
          <v-text-field
            v-model="addForm.wherefrom"
            label="Откуда"
          ></v-text-field>
          <v-text-field
            v-model="addForm.whereto"
            label="Куда"
          ></v-text-field>
          <v-text-field
            v-model="addForm.arrival"
            label="Отлет"
          ></v-text-field>
          <v-text-field
            v-model="addForm.departure"
            label="Прилет"
          ></v-text-field>
          <v-btn color="primary" type="submit">ОК</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>


<script>
import PlanesList from '@/components/PlanesList.vue'
import axios from 'axios'

export default {
  name: 'FlightCreate',
  components: {
   PlanesList,
 },
  data: () => ({
    planes: [],
    addForm: {
      number: '',
      departure: '',
      arrival: '',
      whereto:'',
      wherefrom:'',
      gate:'',
      plane: "",
    }
  }),
  async created () {
    this.PlanesList()
  },
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
    async FlightCreate() {
      try {
        
        const response = await this.axios
          .post('http://127.0.0.1:8000/flights/create/', this.addForm)
        
        console.log(response)
        this.$refs.addForm.reset()
        await this.$router.push('/flight/')
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  }
}
</script>