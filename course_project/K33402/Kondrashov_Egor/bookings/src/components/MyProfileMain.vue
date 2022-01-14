<template>
  <b-container class="my-profile">
    <b-row class="justify-content-center"><h2>Ваш профиль</h2></b-row>
    <b-row class="justify-content-center">
      <div class="col-10">
        <p>
          <b-link :to="{ name: 'EditProfile' }"
            ><em>Редактировать профиль</em></b-link
          >
        </p>
        <p><strong>Email: </strong> {{ profile.email }}</p>
        <p><strong>Имя: </strong> {{ profile.first_name }}</p>
        <p><strong>Фамилия: </strong> {{ profile.last_name }}</p>
        <p><strong>Отчество: </strong> {{ profile.middle_name }}</p>
        <p><strong>Дата рождения: </strong> {{ profile.birthdate }}</p>
        <br />
        <b-link :to="{ name: 'ChangePassword' }"
          ><em>Поменять пароль для входа</em></b-link
        >
      </div>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "MyProfileMain",
  props: {
    profile: Object
  }
}
</script>
<style>
.my-profile {
  padding: 20px;
  border: 2px solid var(--accent-color);
  margin: 30px auto 0px;
  border-radius: 7px;
}
</style>
