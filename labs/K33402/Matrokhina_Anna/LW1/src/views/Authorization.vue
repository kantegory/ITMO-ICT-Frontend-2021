<template>
  <div class="registration-page">
    <b-container>
      <div class="auth-card-wrapper">
        <b-card class="auth-card"
                title="Авторизация"
        >
          <b-form>
            <b-form-group label="Логин">
              <b-form-input placeholder="Введите логин" />
            </b-form-group>

            <b-form-group label="Пароль">
              <b-form-input placeholder="Введите пароль" />
            </b-form-group>

            <div class="d-flex justify-content-center">
              <b-button type="sumbit">Авторизоваться</b-button>
            </div>
          </b-form>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Authorizarization',
}
</script>
