<template>
  <b-container class="my-profile">
    <b-row class="justify-content-center"
      ><h2>Редактирование профиля</h2></b-row
    >
    <b-row class="justify-content-center">
      <div class="col-10">
        <b-form @submit="onSubmit">
          <b-form-group
            id="first-name-group"
            label="Имя"
            label-for="first-name-input"
          >
            <b-form-input
              id="first-name-input"
              v-model="profile.first_name"
              type="text"
              class="col-4"
              placeholder="Имя"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="last-name-group"
            label="Фамилия"
            label-for="last-name-input"
          >
            <b-form-input
              id="last-name-input"
              v-model="profile.last_name"
              type="text"
              class="col-4"
              placeholder="Фамилия"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="middle-name-group"
            label="Отчество"
            label-for="middle-name-input"
          >
            <b-form-input
              id="middle-name-input"
              v-model="profile.middle_name"
              type="text"
              class="col-4"
              placeholder="Отчество"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="birthdate-group"
            label="Дата рождения"
            label-for="birthdate-input"
          >
            <b-form-input
              id="birthdate-input"
              v-model="profile.birthdate"
              type="date"
              class="col-4"
              placeholder="Дата рождения"
            ></b-form-input>
          </b-form-group>

          <b-button class="col-6 btn" type="submit"
            >Изменить данные профиля</b-button
          >
        </b-form>
      </div>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "EditProfileMain",
  data() {
    return {
      profile: Object
    }
  },
  methods: {
    async getMyProfile() {
      try {
        const config = {
          headers: {
            Authorization: this.$store.getters.authHeader
          }
        }
        const resp = await this.axios.get(
          "http://localhost:8000/api/users/me",
          config
        )

        if (resp.status !== 200) {
          throw new Error(resp.error)
        }

        this.profile = resp.data
      } catch (e) {
        console.error("Error from API: ", e)
      }
    },
    async onSubmit(event) {
      event.preventDefault()
      try {
        const config = {
          headers: {
            Authorization: this.$store.getters.authHeader
          }
        }

        const resp = await this.axios.patch(
          "http://localhost:8000/api/users/me",
          this.profile,
          config
        )

        if (resp.status !== 200) {
          throw new Error(resp.error)
        }

        this.$router.push({ name: "MyProfile" })
      } catch (e) {
        console.error("Error from API: ", e)
      }
    }
  },
  beforeMount() {
    this.getMyProfile()
  }
}
</script>
<style>
.my-profile {
  padding: 20px;
  border: 2px solid var(--accent-color);
  margin: 30px auto 0px;
  border-radius: 7px;
}
</style>
