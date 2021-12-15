<template>
  <section>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <epic-item-card
          v-for="epicItem in epicItems"
          :key="epicItem.identifier"
          :epic-item="epicItem"
          class="my-2"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import EpicItemCard from '../components/EpicItemCard.vue'
const apiKey = '4IUJnwV1BGoR55rpTIourtyRCPhSwtXX26rEA3rA'
const apiUrl = 'https://api.nasa.gov/EPIC'

export default {
  components: { EpicItemCard },
  name: 'Greeting',
  data: () => ({
    epicItems: []
  }),

  methods: {
    async getEpicItems () {
      try {
        // выполним запрос на получение списка всех
        // фотографий земли
        const response = await this.axios
          .get(`${apiUrl}/api/natural?api_key=${apiKey}`)

        // если статус ответа не 200, то выкинем
        // ошибку
        if (response.status !== 200) {
          throw new Error(response.error)
        }

        // пройдёмся по полученному массиву данных и
        // приведём его к тому виду, с которым будет
        // удобно работать
        const epicItems = response.data.map((epicItem) => {
          const date = new Date(epicItem.date)

          // собираем дату в нужном виде
          const year = date.getFullYear()

          const month = String(date.getMonth() + 1).length > 1
            ? date.getMonth() + 1
            : `0${date.getMonth() + 1}`

          const day = String(date.getDate()).length > 1
            ? date.getDate()
            : `0${date.getDate()}`

          epicItem.date = `${year}/${month}/${day}`

          // получаем картинку
          epicItem.image =
            `${apiUrl}/archive/natural/${epicItem.date}/png/${epicItem.image}.png?api_key=${apiKey}`

          return epicItem
        })

        this.epicItems = epicItems
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  },

  created () {
    this.getEpicItems()
  }
}
</script>

<style>
</style>
