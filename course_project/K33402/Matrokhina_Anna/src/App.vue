<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand :to="{name: 'Home'}">Прогноз погоды</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{name: 'Registration'}">
              Регистрация
            </b-nav-item>
            <b-nav-item :to="{name: 'Authorization'}">
              Авторизация
            </b-nav-item>
            <b-nav-item :to="{name: 'Account'}">
              ЛК
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <main>
      <router-view />
    </main>

  </div>
</template>
