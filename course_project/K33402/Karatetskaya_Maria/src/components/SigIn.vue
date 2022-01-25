<template>
  <main>
<div class="container">
  <div class="col-lg-3"></div>
  <div class="col-lg-6 col-12 login">
    <div class="title"><a>Вход</a></div>
    <form class="form-fly" @submit.prevent="enter()" method="get">
      <div class="mb-3">
        <input type="text" name="login" id="login" class="form-control" placeholder="Логин" v-model="login">
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" name="passw" id="passw" placeholder="Пароль" v-model="passw">
      </div>
      <h5 v-for="(f, index) in wrong" :key="index" class="answer">Неверный логин или пароль</h5>
      <button v-if="sign" type="submit" class="btn btn-primary show_btn mb-4" id="clear"><a>Войти</a></button>
      <button v-if="true_form" :key="index" type="submit" class="btn btn-primary show_btn mb-4"><a href="/MyTicket">Войти</a></button>
      <button v-if="wrong" :key="index" class="btn btn-primary show_btn mb-4"><a href="/SignIn">Войти</a></button>
      <h5 v-for="(f, index) in wrong" :key="index" class="left"><a href="/SignUp">Регистрация</a></h5>
      <h5 v-for="(f, index) in wrong" :key="index" class="right" ><a href="/Change">Забыли пароль?</a></h5>
    </form>
  </div>
  <div class="col-lg-3"></div>
</div>
</main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignIn',
  data: () => ({
    login: null,
    sign: '1',
    passw: null,
    form: null,
    true_form: null,
    ans2: null,
    wrong: null,
    new_url: ''
  }),
  methods: {
    enter: function () {
      axios.get(`http://localhost:3000/person?login=${this.login}&passw=${this.passw}`).then(response => {
        if (response.data.length !== 0) {
          this.form = response.data
          console.log(this.form[0].id)
          console.log('12345')
          localStorage.setItem('maha', JSON.stringify(this.form[0].id))
          this.sign = ''
          this.wrong = ''
          this.true_form = '1'
        } else {
          this.true = ''
          this.sign = ''
          this.wrong = '1'
        }
      }
      )
    }
  }
}

</script>

<style scoped>
  .answer {
    text-align: center;
  }
  .left, .right {
    display: inline-block;
    margin-right: -10%;
    vertical-align: bottom;
  }
  .right {
    text-align: right;
    margin-left: 70%;
  }
  .left a, .right a {
    display: inline-block;
    position: relative;
    color: blue;
  }
</style>5
