<template>
  <div v-if="this.$store.getters.isLoggedIn">
    <b-form @submit="makeBooking" v-if="!sentSuccess">
      <h4>Забронировать отель</h4>

      <b-form-group
        id="number-of-guests-group"
        label="Количество гостей:"
        label-for="number-of-guests"
      >
        <b-form-input
          id="number-of-guests"
          v-model="form.number_of_guests"
          type="number"
          placeholder="Сколько гостей собираются проживать?"
          required
          class="col-4"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="arrival-date-group"
        label="Дата заезда:"
        label-for="arrival-date"
      >
        <b-form-input
          id="arrival-date"
          v-model="form.starts_at"
          type="date"
          placeholder="Дата заезда"
          required
          class="col-4"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="departure-date-group"
        label="Дата выезда:"
        label-for="departure-date"
      >
        <b-form-input
          id="departure-date"
          v-model="form.ends_at"
          type="date"
          placeholder="Дата выезда"
          required
          class="col-4"
        ></b-form-input>
      </b-form-group>

      <b-button class="col-4 btn btn-lg" type="submit">Забронировать</b-button>
    </b-form>
    <div v-if="sentSuccess">
      <h4 class="text-success">Успешно забронировано!</h4>
      <p>
        Чтобы посмотреть все ваши бронирования, нажмите
        <b-link :to="{ name: 'MyBookings' }">сюда</b-link>.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MakeBookingForm",
  data() {
    return {
      form: { number_of_guests: 1, starts_at: NaN, ends_at: NaN, hotel_id: 1 },
      sentSuccess: false
    }
  },
  methods: {
    async makeBooking(event) {
      event.preventDefault()
      const postData = this.form
      postData.hotel_id = this.$route.params.id
      try {
        const config = {
          headers: {
            Authorization: this.$store.getters.authHeader
          }
        }
        const resp = await this.axios.post(
          "http://localhost:8000/api/bookings",
          postData,
          config
        )

        if (resp.status !== 200) {
          throw new Error(resp.error)
        }

        this.sentSuccess = true
      } catch (e) {
        console.error("Error from API: ", e)
      }
    }
  }
}
</script>
<style scoped>
</style>
