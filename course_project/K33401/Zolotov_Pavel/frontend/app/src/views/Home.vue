<template>
  <!--<hello-world />-->
  <v-container fill-height>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <h2 class="text-center">
            Найдите работу мечты
          </h2>

          <v-form
            @submit.stop.prevent="submitSearch"
            ref="form"
            class="my-6"
          >
            <v-row>
              <v-col class="mx-auto">
                <v-text-field
                  v-model="search"
                  name="search"
                  placeholder="Разработчик..."
                  solo
                />
              </v-col>
            </v-row>
          </v-form>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',

  components: {
    // HelloWorld
  },

  methods: {
    submitSearch () {
      this.$router.push({ path: '/jobs', query: { title: this.search } })
      this.$refs.form.reset()
    }
  }
}
</script>

<!--<style>
section {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>-->
