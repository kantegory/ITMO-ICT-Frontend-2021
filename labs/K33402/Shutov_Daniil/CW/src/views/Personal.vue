<template>
  <main class="body">
    <div class="bg-color">
      <div class="container" id="body">
        <div class="row">
          <div class="col-lg">
            <h1 id="title">Мой профиль</h1>
            <Profile />
            <CountryFilter />
          </div>
          <CityList />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Profile from "@/components/Profile";
import CountryFilter from "@/components/CountryFilter";
import CityList from "@/components/CityList";

export default {
  name: 'Home',
  components: {
    CityList,
    CountryFilter,
    Profile,
  }
}
</script>
<style>
  .body{
    min-height: calc(100vh - 80px);
  }
  #title{
    margin-bottom: 20px;
    margin-top: 50px;
  }
</style>