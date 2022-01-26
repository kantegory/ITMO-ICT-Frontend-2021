<template>
  <main>
    <div class="d-flex title justify-content-center">
      <h3>Поиск жилья</h3>
    </div>
    <div class="container d-flex main-search justify-content-center">
      <form class="col-9">
        <input type="search" class="form-control " placeholder="Начните вводить ключевые слова"
               aria-label="Search">
      </form>
    </div>
    <div class="container d-flex search-params justify-content-center">
      <form class="col-3">
        <label for="numberOfGuests" class="form-label">Количество гостей</label>
        <input type="number" class="form-control small-input" id="numberOfGuests">
      </form>
      <form class="col-3">
        <label for="city" class="form-label">Город</label>
        <input type="text" class="form-control small-input" id="city">
      </form>
      <form class="col-3">
        <label for="arrival-datetime" class="form-label">Время заезда</label>
        <input class="form-control small-input" id="arrival-datetime" name="dateTimePicker">
      </form>
    </div>

    <div class="container d-flex search-button justify-content-center">
      <button class="btn" type="submit">Найти</button>
    </div>

  </main>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style scoped>
.main-search {
  position: relative;
  top: 35%
}

.search-params {
  position: relative;
  top: 40%
}

.title {
  position: relative;
  top: 25%
}

.search-button {
  position: relative;
  top: 45%
}

#numberOfGuests {
  width: 50%;
}

#city {
  width: 70%;
}

.btn {
  background-color: #4263a2;
  color: #f5f5f5;
  margin: 10px auto;
  font-size: calc(1.3rem + .6vw);
  border-radius: 10px;
  padding: 5px 40px;
}
main {
  height: 90%;
}

.btn:hover {
  background-color: #4247a2;
  color: #f5f5f5;
}
</style>
