<template>
  <div class="p-5 text-left">
    <h2 class="font-weight-bold">Регистрация</h2>
    <p class="font-weight-light">Заполните форму ниже</p>
    <div class="">
      <form class="needs-validation" novalidate>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">Имя</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Пожалуйста, укажите своё имя.
            </div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">Фамилия</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Пожалуйста, укажите свою фамилию.
            </div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">Имя пользователя</label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input type="text" class="form-control" id="username" placeholder="Username" required>
              <div class="invalid-feedback">
                Пожалуйста, выберите имя пользователя.
              </div>
            </div>
          </div>

          <div class="col-12">
            <label for="email" class="form-label">Email адрес<span class="text-muted"> (Опционально)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@ya.com">
            <div class="invalid-feedback">
              Пожалуйста, укажите свой email корректно.
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Место жительства</label>
            <input type="text" class="form-control" id="address" placeholder="Санкт-Петербург" required>
            <div class="invalid-feedback">
              Пожалуйста, укажите действующий город.
            </div>
          </div>

          <div class="col-12">
            <label for="address2" class="form-label">Место жительства 2<span
              class="text-muted"> (Опционально)</span></label>
            <input type="text" class="form-control" id="address2" placeholder="Выборг">
          </div>
        </div>

        <hr class="my-4">
        <router-link to="/">
          <button id='register' class="w-100 btn btn-primary btn-lg" type="submit">Завершить регистрацию</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style scoped>

</style>
