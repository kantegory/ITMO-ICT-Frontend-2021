<template>
  <section>
    <v-row>
      <v-col>
        <greeting-card :username="savedUsername" />
        <h2>Здесь вы сможете легко и быстро купить билет на самолет.</h2>
        <v-img
        :src="require('../assets/boy.jpg')"
        class="my-0"
        contain
        height="200"
      />
      </v-col>
    </v-row>
  </section>
</template>
 
<script>
import GreetingCard from "@/components/GreetingCard";

export default {
  name: "Greeting",

  components: {
    GreetingCard,
  },

  data: () => ({
    username: "",

    savedUsername: "",
  }),

  methods: {},

  created() {
    // если localStorage содержит значение по ключу
    // username, то запишем его в наши переменные
    if (localStorage.getItem("username")) {
      this.savedUsername = localStorage.getItem("username");

      this.username = this.savedUsername;
    }
  },
};
</script>
 
<style>
.greeting-list-wrapper {
  display: flex;
}

.greeting-list-wrapper .greeting-list {
  margin: auto;
}
</style>

