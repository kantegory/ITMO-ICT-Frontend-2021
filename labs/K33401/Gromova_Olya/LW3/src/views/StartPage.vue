<template>
  <main>
    <div class="container">
      <div class="col-12 col-lg-5">
        <form class="form-fly">
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Откуда">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Куда">
          </div>
          <div class="mb-3">
            <input type="date" class="form-control" placeholder="Когда">
          </div>

          <div class="mb-3">
            <select class="form-select form-select-lg form-control">
              <option selected>Пассажиры</option>
              <option value="1">1 Пассажир</option>
              <option value="2">2 Пассажира</option>
              <option value="3">3 Пассажира</option>
            </select>
          </div>
          <div class="mb-3">
            <select class="form-select form-select-lg form-control">
              <option selected>Класс</option>
              <option value="1">Бизнес-класс</option>
              <option value="2">Первый-класс</option>
              <option value="3">Эконом-класс</option>
            </select>
          </div>
          <a href="/tickets" class="btn btn-primary show">Смотреть билеты</a>
        </form>
      </div>
      <div class="col-lg-7"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'StartPage',
  components: {
  }
}
</script>