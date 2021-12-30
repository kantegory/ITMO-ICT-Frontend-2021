<template>
  <v-app>
    <!-- NavBar -->
    <v-app-bar app color="primary" dark>
      <!-- Logo -->
      <v-app-bar-title>
        <div class="d-flex align-center">Hotel App</div>
      </v-app-bar-title>

      <!-- Các trang khác như hotels, rooms -->
      <v-btn
        text
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        class="ml-4"
      >
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <!-- Phần bên phải chỉ hiện khi người dùng đăng nhập -->
      <div v-if="authenticated">
        <!-- các nút bấm bên phải như My Bookings, Change Password -->
        <v-btn
          text
          v-for="item in functionalItems"
          :key="item.title"
          :to="item.path"
          class="mr-4"
        >
          <div v-if="item.title">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </div>
          <div v-else>
            <v-icon dark>{{ item.icon }}</v-icon>
          </div>
        </v-btn>

        <!-- Nút Đăng Nhập -->
        <v-btn depressed elevation="2" @click="signout"
          ><v-icon>mdi-logout</v-icon></v-btn
        >
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const baseApiUrl = "http://localhost:8000";

export default {
  name: "App",

  // Các state
  data: () => ({
    // các Menu Items bên trái -> dẫn đến trang
    menuItems: [
      { title: "Home", path: "/home", icon: "mdi-home" },
      { title: "Room", path: "/rooms", icon: "mdi-bed" },
      { title: "Hotel", path: "/hotels", icon: "mdi-domain" },
    ],
    // các Menu Items bên phải -> dẫn đến trang
    functionalItems: [
      { title: "My Bookings", path: "/me/bookings", icon: "mdi-bed" },
      { path: "/me/changepassword", icon: "mdi-key" },
    ],
  }),
  methods: {
    /**
     * Function này được gọi khi nhấn nút 'Sign Out'
     * Gọi API đến để Đăng Xuất
     */
    async signout() {
      try {
        // Gọi API để đăng xuất, xoá mã xác thực (Auth Token) trong database
        await this.axios.post(
          `${baseApiUrl}/auth/token/logout/`,
          {},
          {
            // API đi kèm mã xác thực hiện tại
            headers: {
              Authorization: `Token ${localStorage.authToken}`,
            },
          }
        );

        // Xoá mã xác thực (authToken) ra khỏi local storage (kho nội bộ)
        localStorage.removeItem("authToken");

        // Gán (authToken = null) cho state toàn bộ (global State) -> Component nào cũng có thể biết
        this.$store.commit("setAuthToken", null);

        // Reload lại trang
        window.location.reload();
      } catch (e) {
        // Mở pop up nhỏ, báo rằng đã có lỗi đăng xuất
        this.$toasted.show("Could not log you out !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },
  },

  // Nơi tính toán dựa trên sự thay đổi của state
  computed: {
    /**
     * Tính toán xem người dùng đã đăng nhập hay chưa.
     * Function này dùng để hiện/giấu nút Sign Out
     *
     * @returns {boolean} trả về True (đã đăng nhập) / false (chưa đăng nhập)
     */
    authenticated() {
      let key;

      // Nếu trong Local Storage (kho nội bộ) có mã xác thực
      if (localStorage.authToken && localStorage.authToken !== "") {
        // gán key
        key = localStorage.authToken;

        // Gán authToken cho state toàn bộ (global State) -> Component nào cũng có thể xài authToken
        this.$store.commit("setAuthToken", key);
      }
      // Nếu State toàn bộ có lưu giữ mã xác thực (authToken)
      else if (
        this.$store.getters.getAuthToken &&
        this.$store.getters.getAuthToken !== ""
      ) {
        // gán key
        key = this.$store.getters.getAuthToken;
      }

      return key;
    },
  },
};
</script>
