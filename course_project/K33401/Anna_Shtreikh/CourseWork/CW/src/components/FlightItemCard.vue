<template>
  <v-card elevation="1" class="mb-8 mr-3">
    <v-row>
      <v-card-title class="justify-center">
        <h5>{{ flightItem.number }}</h5>
      </v-card-title>
      <v-card-subtitle>
        <h5 class="indigo--text">
          {{ flightItem.wherefrom }} - {{ flightItem.whereto }}
        </h5>
      </v-card-subtitle>
      <v-img
        :src="require('../assets/planehed.jpg')"
        class="my-0"
        contain
        height="70"
      />
      <v-col cols="12">
        <v-card-text>
          <span v-if="flightItem.plane == null">Airbus380</span>
          <span v-else>{{ flightItem.plane }}</span>
          <br />
          {{ flightItem.departure }} - {{ flightItem.arrival }}
          <br />
          Gate: {{ flightItem.gate }}
          <br />
          <v-btn
            small
            color="accent"
            class="mb-3 mr-3"
            @click="$router.push(`/flight/upd/${flightItem.id}/`)"
            >Редактировать</v-btn
          >
          <br />
          <v-btn
            small
            color="accent"
            class="mb-3 mr-3"
            @click="deleteElem(flightItem.id)"
            >Удалить</v-btn
          >
          <br />
          <v-btn
            small
            color="#3f57c4bb"
            @click="$router.push(`/flight/${flightItem.id}/ticket/`)"
            >Оформить билет!</v-btn
          >
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "FlightItemCard",

  props: {
    flightItem: Object,
  },
  methods: {
    async deleteElem(item) {
      await this.axios
        .delete(`http://127.0.0.1:8000/flights/${item}/`)
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
