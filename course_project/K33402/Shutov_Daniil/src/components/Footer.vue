<template>
  <footer>
    <nav class="navbar navbar-light mt-5">
      <div class="container">
        <div class="row">
          <div class="col-4 me-3">
            <h6 class="mt-4">
              Лабораторная работа №3
            </h6>

          </div>
          <div class="col-2">
            <h6 class="mt-4">
              Шутов Данил К33402
            </h6>
          </div>
          <div class="col img">
            <a href="https://github.com/danyashutov">
              <img src="../../public/Github.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
footer{
  background: grey;
  color: white;
  flex: 0 0 auto;
  width: 100%;

}
footer .img{
  display: flex;
  justify-content: flex-end;
}
</style>
