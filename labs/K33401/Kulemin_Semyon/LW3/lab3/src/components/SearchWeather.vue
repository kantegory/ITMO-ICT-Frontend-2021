<template>
  <div class="ml-5 mr-5">
    <div id='locality'>
      <label class="form-label">Выберите населенный пункт</label>
      <div class="input-group ">
        <span class="input-group-text">@</span>
        <select class="form-select" name="">
          <option value>Выберите...</option>
          <option>Пушкин</option>
          <option>Кронштадт</option>
          <option>Петергоф</option>
        </select>
      </div>
    </div>

    <hr class="my-4">

    <form action="">
      <button class="w-100 btn btn-primary btn-lg" type="submit">Выбрать</button>
    </form>

    <hr class="my-4">
    <div class="row">
      <div class="col">
        <table class="table mt-5 mb-3">
          <tr>
            <td>21/10</td>
            <td>+ 7 °C</td>
            <td>дождь</td>
          </tr>
          <tr>
            <td>22/10</td>
            <td>+ 5 °C</td>
            <td>снег</td>
          </tr>
          <tr>
            <td>23/10</td>
            <td>+ 9 °C</td>
            <td>туман</td>
          </tr>
          <tr>
            <td>24/10</td>
            <td>+ 9 °C</td>
            <td>туман</td>
          </tr>
          <tr>
            <td>25/10</td>
            <td>+ 9 °C</td>
            <td>туман</td>
          </tr>
          <tr>
            <td>26/10</td>
            <td>+ 9 °C</td>
            <td>туман</td>
          </tr>
          <tr>
            <td>27/10</td>
            <td>+ 9 °C</td>
            <td>туман</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchWeather'
}
</script>

<style scoped>

</style>
