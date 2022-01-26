<template>
  <section>
    <v-row>
      <v-col cols="8" class="mx-auto">
        <job-response-item-card
          v-for="jobResponseItem in responseItems"
          :key="jobResponseItem.identifier"
          :job-response-item="jobResponseItem"
          class="my-2"
        />
        <v-banner
          v-if="responseItems.length === 0"
          outlined
          rounded
          class="my-7"
        >
          Вы пока не откликнулись ни на одну вакансию
        </v-banner>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import JobResponseItemCard from '@/components/JobResponseItemCard.vue'
// const apiKey = 'pv7mgIb4MCWKU5a8q0Zm8phM3KZiCaKdOXA0Hmth'
// const apiUrl = 'https://api.nasa.gov/EPIC'
const apiUrl = 'http://127.0.0.1:8000'

export default {
  components: { JobResponseItemCard },
  name: 'JobResponsesList',

  data: () => ({
    responseItems: []
  }),

  methods: {
    async getJobResponses () {
      try {
        const response = await this.axios.get(`${apiUrl}/api/jobs-response/get`)
        if (response.status !== 200) {
          throw new Error(response.error)
        }
        this.responseItems = response.data
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  },

  created () {
    this.getJobResponses()
  }
}
</script>

<style>
</style>
