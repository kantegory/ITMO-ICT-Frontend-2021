<template>
  <b-container class="my-profile">
    <b-row class="justify-content-center"><h2>Изменение пароля</h2></b-row>
    <b-row class="justify-content-center">
      <div class="col-10">
        <b-form @submit="onSubmit">
          <b-form-group
            id="password-group"
            label="Новый пароль"
            label-for="password-input"
          >
            <b-form-input
              id="password-input"
              type="password"
              class="col-4"
              placeholder="Введите новый пароль"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="repassword-group"
            label="Новый пароль ещё раз"
            label-for="repassword-input"
          >
            <b-form-input
              id="repassword-input"
              type="password"
              class="col-4"
              placeholder="Повторите ввод нового пароля"
            ></b-form-input>
          </b-form-group>

          <b-button size="sm" type="submit">Изменить пароль для входа</b-button>
        </b-form>
      </div>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "ChangePasswordMain",
  data() {
    return {
      password: "",
      rePassword: ""
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      if (this.password === this.rePassword) {
        try {
          const config = {
            headers: {
              Authorization: this.$store.getters.authHeader
            }
          }

          const patchData = {
            password: this.password
          }

          const resp = await this.axios.patch(
            "http://localhost:8000/api/users/me",
            patchData,
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
    }
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
