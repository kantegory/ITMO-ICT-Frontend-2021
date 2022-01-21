<template>
  <div class="container">
    <div class="row">
      <div class="col-9 mt-3 mb-3">
        <label class="form-label">Введите город № 1</label>
        <div class="input-group mt-1 mb-3">
          <span class="input-group-text">@</span>
          <input id='city1' type="text" class="form-control" placeholder="Санкт-Петербург" required>
        </div>

        <button id="register1" class="w-50 btn btn-primary btn-lg" type="submit">Выбрать</button>
        <br>
      </div>
      <div class="col-1  mt-3 mb-3">
        <label class="form-label">Введите градусы</label>
        <br>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary active">
            <input type="radio" name="options" id="option1" autocomplete="off" checked> Цельсий
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option2" autocomplete="off"> Фаренгейт
          </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-9 mt-3 mb-3">
        <label class="form-label">Введите город № 2</label>
        <div class="input-group mt-1 mb-3">
          <span class="input-group-text">@</span>
          <input id='city2' type="text" class="form-control" placeholder="Москва" required>
        </div>

        <button id="register2" class="w-50 btn btn-primary btn-lg" type="submit">Выбрать</button>
        <br>
      </div>
    </div>

    <div class="row">
      <div class="col-9 mt-3 mb-3">
        <label class="form-label">Введите город № 3</label>
        <div class="input-group mt-1 mb-3">
          <span class="input-group-text">@</span>
          <input id='city3' type="text" class="form-control" placeholder="Лондон" required>
        </div>

        <button id="register3" class="w-50 btn btn-primary btn-lg" type="submit">Выбрать</button>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitiesChoice'
}
</script>

<style scoped>

</style>
