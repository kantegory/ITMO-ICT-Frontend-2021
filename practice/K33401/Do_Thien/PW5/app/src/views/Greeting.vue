<template>
  <section>
    <greeting-card :username="savedUsername" />
    <h2>This is a project in Vue.</h2>

    <v-form
      @submit.prevent="submitUsername"
      ref="form"
      class="my-2"
    >
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-text-field
            label="Enter your name"
            v-model="username"
            name="username"
            placeholder="Your name"
          />
        </v-col>
      </v-row>
    </v-form>

    <h3> Greeting options: </h3>

    <v-row>
      <v-col cols="4" class="mx-auto">
        <v-card
          elevation="2"
          class="px-2 py-5"
          color="blue"
          dark
        >
          <greeting-list :greetings="greetings" />
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import GreetingCard from '../components/GreetingCard'
import GreetingList from '../components/GreetingList'

export default {
  name: 'Greeting',

  components: {
    GreetingCard,
    GreetingList
  },

  data: () => ({
    username: '',

    savedUsername: '',

    greetings: [
      { id: 1, text: 'Привет' },
      { id: 1, text: 'Hello' },
      { id: 1, text: 'Xin chao' },
      { id: 1, text: 'Hola' }
    ]
  }),

  methods: {
    submitUsername () {
      localStorage.setItem('username', this.username)

      this.savedUsername = this.username

      this.$refs.form.reset()
    }
  },

  created () {
    if (localStorage.getItem('username')) {
      this.savedUsername = localStorage.getItem('username')

      this.username = this.savedUsername
    }
  }
}
</script>

<style>
.greeting-list-wrapper {
  display: flex;
}

.greeting-list-wrapper .greeting-list {
    margin: auto;
    font-size: 20px;
}
</style>
