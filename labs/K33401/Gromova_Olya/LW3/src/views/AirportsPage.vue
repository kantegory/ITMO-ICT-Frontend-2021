<template>
  <main>
    <div class="container fly">
      <div class="title"><a>Аэропорты</a></div>
      <div class="row card-group">
        <div class="row card-group fly">
          <div class="col-4 col-card">
            <div class="card">
              <img src="images/Spb.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Санкт-Петербург</h5>
                <p class="card-text">Международный аэропорт Пулково — международный аэропорт, имеющий статус федерального значения, располагающийся в 15 км от центра Санкт-Петербурга в Московском районе. Единственный аэропорт Спб обслуживающий официальные рейсы.</p>
                <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D0%BB%D0%BA%D0%BE%D0%B2%D0%BE_(%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82)" class="btn btn-primary little" data-toggle="modal" data-target="#myModal">Подробнее</a>
              </div>
            </div>
          </div>

        <div class="col-4 col-card">  
          <div class="card">
            <img src="images/NiNo.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Нижний Новгород</h5>
              <p class="card-text">Аэропорт Стри́гино — международный аэропорт федерального значения, обслуживающий Нижний Новгород и Нижегородскую область.
              Расположен в западной части Автозаводского района Нижнего Новгорода, в 18 км к юго-западу от центра города.</p>
              <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%BE_(%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82)" class="btn btn-primary little" data-toggle="modal" data-target="#myModal">Подробнее</a>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="card">
            <img src="images/vnukovo.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Москва</h5>
              <p class="card-text">Международный аэропорт Внуково — старейшее авиапредприятие московского авиационного узла, пережившее великие события, неразрывно связанные как с 
              историей нашей страны, так и с историей отечественной гражданской авиации.</p>
              <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%BD%D1%83%D0%BA%D0%BE%D0%B2%D0%BE_(%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82)" class="btn btn-primary little" data-toggle="modal" data-target="#myModal">Подробнее</a>
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
    name: 'AirportsPage',
    components: {}
}
</script>