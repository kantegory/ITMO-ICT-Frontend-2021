<template>
  <main>
    <div class="container">
      <div class="col-12 col-lg-5">
        <form class="form-fly">
          <div class="mb-3">
            <label class="label_text" for="from">Пункт отправления:</label>
            <input type="text" class="form-control" id="from" name="from" placeholder="Откуда">
          </div>
          <div class="mb-3">
            <label class="label_text" for="to">Пункт назначения:</label>
            <input type="text" class="form-control" id="to" name="to" placeholder="Куда">
          </div>
          <div class="mb-3">
            <label class="label_text" for="from">Дата отправления:</label>
            <input type="date" class="form-control" id="date" name="date" placeholder="Когда">
          </div>

          <div class="mb-3">
            <select id="pass" class="form-select form-select-lg form-control">
              <option selected>Пассажиры</option>
              <option value="1">1 Пассажир</option>
              <option value="2">2 Пассажира</option>
              <option value="3">3 Пассажира</option>
            </select>
          </div>
          <div class="mb-3">
            <select id="class_pas" class="form-select form-select-lg form-control">
              <option selected>Класс</option>
              <option value="1">Бизнес класс</option>
              <option value="2">Первый класс</option>
              <option value="3">Эконом класс</option>
            </select>
          </div>
          <button class="btn btn-primary show" onclick="search()">Смотреть билеты</button>
        </form>
      </div>
      <div class="col-lg-7"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>

</style>
