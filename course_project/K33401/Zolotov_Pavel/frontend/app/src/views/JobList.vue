<template>
  <section>
    <v-row>
      <v-col cols="3" class="mx-auto my-6">
        <v-card
          class="mx-auto"
          tile
        >
          <v-list>
            <v-subheader>Поиск и фильтрация</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-form
                  @submit.stop.prevent="submitSearch"
                  ref="form"
                  class="my-1"
                >
                  <v-row>
                    <v-col class="mx-auto">
                      <v-text-field
                        v-model="search"
                        name="search"
                        placeholder="Разработчик..."
                        outlined
                      />
                    </v-col>
                  </v-row>
                  <!--<v-row>
                    <v-range-slider
                      v-model="range"
                      :max="max"
                      :min="min"
                      hide-details
                      class="align-center"
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          :value="10000"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(range, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          :value="1000000"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(range, 1, $event)"
                        ></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-row>-->
                  <v-row>
                    <v-col class="mx-auto">
                      <v-select
                        v-model="region"
                        :items="regionItems"
                        label="Регион"
                        outlined
                        clearable
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="mx-auto">
                      <v-select
                        v-model="industry"
                        :items="industryItems"
                        label="Индустрия"
                        outlined
                        clearable
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                  >
                    Показать
                  </v-btn>
                </v-form>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="8" class="mx-auto">
        <job-item-card
          v-for="jobItem in jobItems"
          :key="jobItem.identifier"
          :job-item="jobItem"
          class="my-2"
        />
        <v-banner
          v-if="jobItems.length === 0"
          outlined
          rounded
          class="my-7"
        >
          Не нашлось вакансий по вашему запросу
        </v-banner>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import JobItemCard from '@/components/JobItemCard.vue'
// const apiKey = 'pv7mgIb4MCWKU5a8q0Zm8phM3KZiCaKdOXA0Hmth'
// const apiUrl = 'https://api.nasa.gov/EPIC'
const apiUrl = 'http://127.0.0.1:8000'

export default {
  components: { JobItemCard },
  name: 'JobList',

  data: () => ({
    jobItems: [],
    regionItems: [],
    industryItems: [],
    search: '',
    region: '',
    industry: ''
  }),

  methods: {
    async getRegionItems () {
      try {
        const response = await this.axios.get(`${apiUrl}/api/region/get`)
        if (response.status !== 200) {
          throw new Error(response.error)
        }
        this.regionItems = response.data.map((item) => {
          return item.name
        })
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    },

    async getIndustryItems () {
      try {
        const response = await this.axios.get(`${apiUrl}/api/industry/get`)
        if (response.status !== 200) {
          throw new Error(response.error)
        }
        this.industryItems = response.data.map((item) => {
          return item.name
        })
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    },

    async getJobItems () {
      try {
        // выполним запрос на получение списка всех
        // фотографий земли
        var url = `${apiUrl}/api/jobs/get?`
        const search = this.$route.query.title
        if (search) {
          this.search = search
        }
        const region = this.$route.query.region
        if (region) {
          this.region = region
        }
        const industry = this.$route.query.industry
        if (industry) {
          this.industry = industry
        }
        const response = await this.axios.get(url, { params: this.$route.query })

        // если статус ответа не 200, то выкинем
        // ошибку
        if (response.status !== 200) {
          throw new Error(response.error)
        }

        // пройдёмся по полученному массиву данных и
        // приведём его к тому виду, с которым будет
        // удобно работать
        const jobItems = response.data.map((jobItem) => {
          /* const date = new Date(jobItem.date)

         // собираем дату в нужном виде
         const year = date.getFullYear()

         const month = String(date.getMonth() + 1).length > 1
           ? date.getMonth() + 1
           : `0${date.getMonth() + 1}`

         const day = String(date.getDate()).length > 1
           ? date.getDate()
           : `0${date.getDate()}`

         jobItem.date = `${year}/${month}/${day}`

         // получаем картинку
         jobItem.image =
           `${apiUrl}/archive/natural/${jobItem.date}/png/${jobItem.image}.png?api_key=${apiKey}` */
          return jobItem
        })

        this.jobItems = jobItems
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    },

    submitSearch () {
      const data = { title: this.search }
      if (this.industry) {
        data.industry = this.industry
      }
      if (this.region) {
        data.region = this.region
      }
      // this.$route.router.go({ query: data });
      // this.$router.replace({ query: data })
      this.$router.push({ path: '/jobs', query: data })
      this.getJobItems()
      // this.$refs.form.reset()
    }
  },

  created () {
    this.getRegionItems()
    this.getIndustryItems()
    this.getJobItems()
  }
}
</script>

<style>
</style>
