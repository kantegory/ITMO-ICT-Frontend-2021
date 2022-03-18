<template>
  <v-app>
    <v-app-bar :src="require('./assets/planehed.jpg')" height="350px;" contain>
      <div class="headerPic">
        <h1>Авиабилеты легко</h1>
      </div>
    </v-app-bar>

    <v-main class="d-flex align-center text-center">
      <v-content style="height: 300px">
        <navbar />
        <router-view />
        <foot />
      </v-content>
     
    </v-main>
  </v-app>
</template>
 
<script>
import Navbar from "@/components/Navbar";
import Foot from "@/components/Foot";

export default {
  name: "App",
  components: { Navbar, Foot },
  data: () => ({
    //
  }),
};
</script>
<style>
.headerPic {
  width: 100%;
  margin: 0;
  display: flex;
  background-size: cover;
  justify-content: flex-start;
  align-items: flex-end;
}
.headerPic h1 {
  border: 2px solid #3f57c4bb;
  border-radius: 30px;
  margin: 15px;
  padding: 7px;
  background-color: rgba(80, 149, 239, 0.6);
  color: rgb(202, 213, 231);
  text-shadow: 5px 3px #3f57c4bb;
  font-size: 100px;
}
</style>
 
