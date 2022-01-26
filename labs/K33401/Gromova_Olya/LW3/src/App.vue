<template>
  <div id="app">
  <Header />
  <router-view />
  <Footer />
  </div>
</template>

<script>


//import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Header,
    Footer,
  }
}
</script>

<style>
  :root {
    --main-bg-img: url("../public/images/light.jpg");
    --main-text-color: #3C3C3B;
    --footer-color: #E5E5E5;
    --main-bg-color: #B4D1E8;
    --main-card-color: #E5E5E5;
    --main-text: #3C3C3B;
    --logo: url("../public/images/logo.png");
    --border-color: #3C3C3B;
    --close: url("../public/images/light.jpg");
  }
  body {
    background-image: var(--main-bg-img);
    color: var(--main-text);
  }
  .img {
    background-image: var(--logo);
  }
  .without {
    background: none;
    background-color: var(--main-bg-color);
  }
  a, .title a {
    font: 18px "Montserrat";
    color: var(--main-text-color);
    text-decoration: none;
  }
    a:not([href]):not([class]) {
      color: var(--main-text-color);
    }
  h5 {
    font: 18px "Montserrat";
    color: var(--main-text-color);
    margin-bottom: 16px;
  }
  .card-body p, p, .foot a, span {
    font: 14px "Montserrat";
    color: var(--main-text-color);
  }
  .card {
    width: 100%;
    max-width: 400px;
    height: 520px;
    background-color: var(--main-card-color);
    margin-left: auto;
    margin-right: auto;
    /*border-color:var(--border-color);*/
  }
  .card-little {
    width: 90%;
    max-width: 300px;
    height: 160px;
  }
    .card-little .card-body {
      height: 160px;
    }
  button.close {
    width: 20px;
    height: 20px;
    background: var(--close);
    border: none;
  }
  .modal-footer, .modal-header {
    border-top: none;
    border-bottom: none;
  }
  .navbar-brand {
    margin-top: -20px;
  }
  .active, .navbar-light .navbar-nav .nav-link.active {
    color: #379683;
  }
  .menu {
    margin-left: -200px;
  }
  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link {
    /*color: var(--main-text-color);*/
  }
    .navbar-light .navbar-nav .nav-link:hover {
      color: #C4C4C4;
    }
  .show_btn {
    margin-top: 50px;
  }
  .form-control {
    background-color: #E5E5E5;
    border: none;
    border-radius: 10px;
    height: 60px;
    font: 24px "Montserrat";
    color: #3C3C3B;
  }
  .label_text {
    margin-bottom: 10px;
  }
  .form-fly {
    margin-top: 50px;
  }
  .btn {
    font: 24px "Montserrat";
    color: var(--main-text-color);
    background-color: #379683;
    color: white;
    height: 60px;
    width: 300px;
    border-radius: 30px;
    border: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
    .btn a {
      font: 24px "Montserrat";
      color: #E5E5E5;
      text-decoration: none;
    }
  .little a {
    font: 18px "Montserrat";
  }
  .modal-content {
    /*background-color: var(--footer-color);*/
  }
  .little {
    margin-bottom: 15px;
    padding-top: 10px;
    height: 40px;
    width: 150px;
    font: 18px "Montserrat";
    position: absolute; /* добавили */
    bottom: 0;
    left: 0;
    right: 0;
  }
  .title a {
    font: 36px "Montserrat";
  }
  .title {
    margin-bottom: 20px;
    text-align: center;
  }
  .around {
    text-align: center;
  }
  .login {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  footer {
    height: 350px;
    background-color: var(--footer-color);
  }
  main {
    min-height: calc(45vh - 50px);
  }
  .foot {
    margin-top: 20px;
    padding-left: 10%;
    /*padding-right: auto;*/
  }
  .mt-3 {
    margin-top: 5rem !important;
  }
  .around {
    margin-top: 20px;
  }
  .center {
    width: 550px;
    margin: auto;
    margin-top: 20px;
    padding-bottom: 20px;
  }
    .center a {
      margin-right: 15px;
    }
    .center ::before {
      margin-right: 10px;
    }
  .menu_ul {
    padding-top: 2%;
    margin-left: auto;
    margin-right: 0;
  }
  .me-auto {
    margin-right: 0 !important;
    margin-left: auto !important;
  }
  .col-card {
    margin-bottom: 30px;
  }
  @media(max-width:1190px) {
    .card {
      height: 450px;
    }
  }
  @media(max-width:1000px) {
    .card {
      height: 480px;
    }
  }
  @media(max-width:974px) {
    .menu_nav {
      text-align: right;
      padding-top: 0em;
    }
    .navbar-nav {
      display: block;
      margin-top: 2%;
    }
    .menu_ul {
      top: 1em;
      right: 5em;
    }
    .navbar-toggler {
      position: absolute;
      right: 5%;
      top: 2em;
    }
    .form-fly, .login {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    .card {
      height: 440px;
    }
  }
  @media(max-width:750px) {
    .card {
      height: 520px;
    }
  }
  @media(max-width:650px) {
    .navbar-toggler {
      right: 3%;
    }
    .foot a {
      font: 12px "Montserrat";
    }
    h5 {
      font: 14px "Montserrat";
    }
    span {
      display: none;
    }
    .center, p.around {
      width: 200px;
    }
  }
  @media(max-width:445px) {
    .card {
      height: 490px;
    }
  }
  @media(max-width:400px) {
    .card {
      height: 460px;
    }
  }
  .log {
    padding-left: 10em;
  }
  .icon svg {
    fill: var(--main-text-color);
    padding-right: 10px;
  }
  .icon {
    display: inline;
  }
  #icon_svg {
    width: 50px;
    height: 30px;
  }
  #icon_svg_insta {
    width: 50px;
    height: 30px;
    margin-left: 30px;
  }
  #icon_svg_face {
    width: 50px;
    height: 30px;
    margin-left: 5px;
  }
  svg span {
    color: var(--main-text-color);
  }
  .social-media {
    margin-bottom: 20px;
  }
@import'~bootstrap/dist/css/bootstrap.css'
</style>