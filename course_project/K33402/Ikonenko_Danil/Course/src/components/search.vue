<template>
  <main>
    <div class="d-flex title justify-content-center">
      <h3>Поиск жилья</h3>
    </div>
    <div class="container main-search justify-content-center">
      <div class="row justify-content-center">
        <div class="col-9">
          <label for="city" class="form-label">Город</label>
          <input
            type="search"
            class="form-control"
            aria-label="Search"
            id="city"
          />
        </div>
      </div>
    </div>
    <div class="container d-flex search-params justify-content-center">
      <form class="col-3">
        <label for="numberOfGuests" class="form-label">Количество гостей</label>
        <input type="number" class="form-control small-input" id="numberOfGuests">
      </form>
      <form class="col-3">
        <label for="arrivalDatetime" class="form-label">Время заезда</label>
        <input class="form-control small-input" id="arrivalDatetime" name="dateTimePicker">
      </form>
      <form class="col-3">
        <label for="departureDatetime" class="form-label">Время выезда</label>
        <input class="form-control small-input" id="departureDatetime" name="dateTimePicker">
      </form>
    </div>

    <div class="container d-flex search-button justify-content-center">
      <button class="btn" type="submit" v-on:click="onSubmit">
        Найти
      </button>
    </div>

  </main>
</template>

<script>


export default {
  name: "searchBar",


  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      this.$router.push({
        name: "Results",
        query: {
          city: document.getElementById("city").value,
          numberOfGuests: document.getElementById("numberOfGuests").value,
          arrivalDatetime: document.getElementById("arrivalDatetime").value,
          departureDatetime: document.getElementById("departureDatetime").value,
        }
      })
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #4263a2;
  color: #f5f5f5;
  margin: 10px auto;
  font-size: calc(1.3rem + .6vw);
  border-radius: 10px;
  padding: 5px 40px;
}
</style>
