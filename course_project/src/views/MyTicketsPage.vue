<template>
  <main>
    <div class="container fly">
      <div class="title"><a>Мои билеты</a></div>
      <div class="row card-group">
        <div class="row card-group fly">
          <div class="col-4 col-card">
            <div class="card">
              <img src="images/plain.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Санкт-Петербург - Москва</h5>
                <p class="card-text">Количество пассажиров - 2</p>
                <p class="card-text">Цена - 3000 руб</p>
                <p class="card-text">Дата вылета - 01.12.2021</p>
                <a href="#" class="btn btn-primary little" data-toggle="modal" data-target="#myModal">Подробнее</a>
              </div>
            </div>
          </div>

        <div class="col-4 col-card">  
          <div class="card">
            <img src="images/plain.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Санкт-Петербург - Сочи</h5>
              <p class="card-text">Количество пассажиров - 2</p>
              <p class="card-text">Цена - 10000 руб</p>
              <p class="card-text">Дата вылета - 01.12.2021</p>
              <a href="#" class="btn btn-primary little" data-toggle="modal" data-target="#myModal">Подробнее</a>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="card">
            <img src="images/plain.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Санкт-Петербург - Адлер</h5>
              <p class="card-text">Количество пассажиров - 2</p>
              <p class="card-text">Цена - 7000 руб</p>
              <p class="card-text">Дата вылета - 01.12.2021</p>
              <a href="#" class="btn btn-primary little" data-toggle="modal" data-target="#myModal">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'MyTicketsPage',
    components: {}
}
</script>