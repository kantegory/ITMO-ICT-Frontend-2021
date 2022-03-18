<template>
  <v-card class="mb-8 mr-3">
    <v-row>
      <v-card-title>
        <h5>№{{ ticket.number }}</h5>
      </v-card-title>
      <v-card-subtitle>
        <h5 class="indigo--text">
          {{ ticket.flight.wherefrom }} - {{ ticket.flight.whereto }}
        </h5>
        <h6 class="indigo--text">
          {{ ticket.flight.departure }} - {{ ticket.flight.arrival }}
        </h6>
        <h6 class="indigo--text">
          Passenger: {{ ticket.passenger.first_name }}
          {{ ticket.passenger.last_name }}
        </h6>
      </v-card-subtitle>
      <v-card-text>
        {{ ticket.flight.plane }}
        <br />
        Flight #{{ ticket.flight.number }}
        <br />
        Gate: {{ ticket.flight.gate }}
        <br />
        <v-btn
          small
          color="#3f57c4bb"
          class="mb-5 mr-3"
          @click="deleteElem(ticket.id)"
          >Удалить</v-btn
        >
      </v-card-text>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "TicketInfo",

  props: {
    ticket: Object,
  },
  methods: {
    async deleteElem(item) {
      await this.axios
        .delete(`http://127.0.0.1:8000/tickets/${item}/`)
        .then((res) => {
          console.log(res);
          this.$router.go(0);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>