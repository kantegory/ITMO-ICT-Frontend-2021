<template>
  <div class="add">
    <h1 style="margin: 20px">Оформить билет</h1>
    <br />
    <v-form @submit.prevent="TicketCreate" ref="buyForm" class="my-2">
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-select
            label="Пассажир"
            v-model="buyForm.passenger"
            :items="passengers"
            item-text="username"
            item-value="id"
          >
          </v-select>
          <v-text-field
            v-model="buyForm.number"
            label="Номер билета"
          ></v-text-field>
          <v-btn color="accent" type="submit" class="mb-6 mr-3">ОК</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>


<script>
import PassengersList from "@/components/PassengersList.vue";
import axios from "axios";

export default {
  name: "CreateTicket",
  components: {
    PassengersList,
  },
  data: () => ({
    passengers: [],
    flight_id: 0,
    buyForm: {
      number: "",
      flight: "",
      passenger: "",
    },
  }),
  async created() {
    this.PassengersList();
    this.flight_id = this.$route.params.flight_id;
    this.buyForm.flight = this.flight_id;
  },
  methods: {
    async PassengersList() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/passengers/all"
        );
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        this.passengers = response.data;

        return response.data;
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
    async TicketCreate() {
      try {
        const response = await this.axios.post(
          "http://127.0.0.1:8000/tickets/create/",
          this.buyForm
        );

        console.log(response);
        this.$refs.buyForm.reset();
        await this.$router.push("/tickets/");
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
  },
};
</script>