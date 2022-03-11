<template>
<div class="text-center pt-4">
  <v-btn
      href="../account"
      text
    >
      <span class="ma-4">Хочу купить</span>
    </v-btn>
        <v-btn
      href="../liked"
      text
    >
      <span class="ma-4">Понравилось</span>
    </v-btn>
    <v-btn
      href="../purchased"
      text
    >
      <span class="ma-4">Мои заказы</span>
    </v-btn>
        <v-btn
      href="../adress"
      text
    >
      <span class="ma-4">Мой адрес</span>
    </v-btn>
        <v-btn
      href="../passwordReset"
      text
    >
      <span class="ma-4">Сброс пароля</span>
    </v-btn>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'navigationPanel'
}
</script>
