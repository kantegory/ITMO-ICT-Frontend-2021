<template>
  <header>
    <div id="logo" onclick="slowScroll('#top')">
      <span>Meetup</span>
    </div>
    <div id="about">
      <a href="#" title="Возможности" onclick="slowScroll('#main')">Войти</a>
      <a href="#" title="Возможности" onclick="slowScroll('#main')">Зарегистрироваться</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet');

header {
    width: 100%;
    padding: 10px 0.5% 0px 0.5%;
    background: transparent;
    float: left;
    position: static;
}

header #logo {
    color: rgb(255, 0, 0);
    cursor: pointer;
}

header #logo span {
    font-size: 1.7em;
    line-height: 45px;
    margin-left: 40px;
    font-family: 'Acme', sans-serif;
}

@media (min-width: 701px) {
    #logo {
        float: left;
        width: 30%;
        font-size: 1.1em;
    }

    #about {
        float: right;
        width: 67%;
    }
}

@media (max-width: 700px) {
    #logo {
        margin-top: 15px;
        width: 100%;
        font-size: 1.5em;
    }

    #about {
        float: right;
        width: 100%;
    }
}

#about {
    text-align: right;
    font-size: 1em;
    line-height: 40px;
    margin-bottom: 10px;
    margin-right: 30px;
}

#about>a {
    color: rgb(0, 0, 0)
}

#about>a:hover {
    color: #b0b0b0;
}

#about>a:not(:last-child) {
    margin-right: 7%;
}

/* Стили для фиксированной шапки */

.fixed {
    z-index: 5000;
    background-color: #fff;
    border-bottom: 1px solid silver;
}

header.fixed #logo {
    color: #ff0000;
}

.fixed #about a {
    color: #343434
}

.fixed #about a:hover {
    color: #ffffff
}
</style>
