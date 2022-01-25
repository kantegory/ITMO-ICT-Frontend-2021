<template>
  <main>
<div class="container">
  <div class="col-lg-3"></div>
  <div class="col-lg-6 col-12 login">
    <div class="title"><a>Восстановление данных</a></div>
    <form class="form-fly" @submit.prevent="enter()" method="get">
      <div class="mb-3">
        <input type="text" name="email" id="email" class="form-control" placeholder="Email" v-model="Email">
      </div>
      <button type="submit" class="btn btn-primary show_btn mb-4" id="clear"><a>Восстановить аккаунт</a></button>
      <h5 v-for="(f, index) in change" :key="index" class="answer">К вам на почту пришли инструкция для восстановления данных аккаунта</h5>
    </form>
  </div>
  <div class="col-lg-3"></div>
</div>
</main>
</template>

<script>
export default {
  name: 'Change',
  props: {
    change: null
  },
  methods: {
    enter: function () {
      this.change = '1'
    }
  }
}

</script>

<style scoped>
  .answer {
    text-align: center;
  }
</style>
