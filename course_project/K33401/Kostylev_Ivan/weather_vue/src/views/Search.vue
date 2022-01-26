<template>
<div>
    <div class="container col-xl-10 px-4 py-3">
      <h4 class="display-4 fs-2">Search weather for town</h4>
        <div class="input-group">
          <input type="search" class="form-control rounded" placeholder="Ivanovo" />
          <button type="button" class="btn btn-outline-primary">search</button>
        </div>
      </div>
    <div class="row mx-5">
      <div id='search-result' class="col">
        <b-card class="card" img-src='../assets/ivanovo.jpg'>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-black text-shadow-2">
            <h2 id="townname" class="pt-5 display-6 lh-1 fw-bold">Ivanovo</h2>
            <h2 id="towndegrees" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">-5°C</h2>
          </div>
        </b-card>
      </div>
      <div class="col">
        <table class="table mt-2 mb-2">
          <tr>
            <td>19.01</td>
            <td>-3°C</td>
            <td>snowing</td>
          </tr>
          <tr>
            <td>20.01</td>
            <td>-6°C</td>
            <td>no precipitation</td>
          </tr>
          <tr>
            <td>21.01</td>
            <td>+2°C</td>
            <td>rain</td>
          </tr>
          <tr>
            <td>22.01</td>
            <td>-6°C</td>
            <td>no precipitation</td>
          </tr>
          <tr>
            <td>23.01</td>
            <td>-2°C</td>
            <td>no precipitation</td>
          </tr>
          <tr>
            <td>24.01</td>
            <td>-3°C</td>
            <td>no precipitation</td>
          </tr>
        </table>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Search'
}
</script>
