<template>
  <section>
    <v-row>
      <v-col cols="10" class="mx-auto my-6">
        <v-btn
            color="indigo"
            outlined
            @click="$router.go(-1)"
        >
            ← Назад
        </v-btn>
        <v-card
        elevation="2"
        cols="2"
        class="mx-auto my-6">
            <v-card-title class="text-h5">
                {{ job.title }}
            </v-card-title>
            <v-card-text>
                <v-row
                    align="center"
                    class="mx-0 black--text text-subtitle-1"
                >
                    Минимальный опыт работы: {{job.min_years_experience}} года
                </v-row>
                <v-row
                    v-if="job.remote_available === true"
                    align="center"
                    class="mx-0 mb-1 black--text text-subtitle-1"
                >
                    <v-icon
                        small
                        color="green darken-2"
                        class="me-1"
                        >
                        mdi-earth
                    </v-icon>
                    Доступна удаленная работа
                </v-row>
                <v-row
                    v-if="job.remote_available === false"
                    align="center"
                    class="mx-0 mb-1 black--text text-subtitle-1"
                >
                    <v-icon
                        small
                        color="red darken-2"
                        class="me-1"
                        >
                        mdi-domain
                    </v-icon>
                    Удаленная работа не доступна
                </v-row>
                <v-row
                    align="center"
                    class="mx-0 mb-3 black--text text-subtitle-1"
                >
                    {{job.description}}
                </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-subtitle
                class="black--text text-subtitle-2 mb-2"
            >
                О компании
            </v-card-subtitle>
            <v-card-text>
                <v-row
                    align="center"
                    class="mb-2 mx-0"
                >
                    <div class="me-2 black--text">
                        {{ job.company.name }}
                    </div>
                    <v-rating
                        :value=job.company.rating
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>
                </v-row>
                <v-row
                    align="center"
                    class="mb-2 mx-0 my-2"
                >
                {{job.company.description}}
                </v-row>
                <v-row
                    v-if="job.company.verified === true"
                    align="center"
                    class="mb-2 mx-0 my-2"
                >
                    <v-icon
                        small
                        color="green darken-2"
                        class="me-1"
                        >
                        mdi-check
                    </v-icon>
                    Профиль компании подтвержден
                </v-row>
                <v-row
                    v-if="job.company.verified === false"
                    align="center"
                    class="mb-2 mx-0 my-2"
                >
                    <v-icon
                        small
                        color="red darken-2"
                        class="me-1"
                        >
                        mdi-close
                    </v-icon>
                    Профиль компании не подтвержден
                </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="success"
                    depressed
                    @click="$router.push({ name: 'JobResponse', params: { id: job.id }})"
                >
                    Откликнуться
                </v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
const apiUrl = 'http://127.0.0.1:8000'

export default {
  components: { },
  name: 'JobDetails',

  data: () => ({
    job: {}
  }),

  methods: {
    async getJob () {
      try {
        var url = `${apiUrl}/api/jobs/${this.$route.params.id}`
        const response = await this.axios.get(url)

        if (response.status !== 200) {
          throw new Error(response.error)
        }

        this.job = response.data
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  },

  created () {
    this.getJob()
  }
}
</script>

<style>
</style>
