<template>
  <!-- Card Sign In -->
  <v-card class="px-5 py-5 mx-auto mt-5" width="400">
    <!-- Tiêu đề -->
    <v-card-title>Sign In</v-card-title>

    <!-- Form đăng nhập -->
    <v-form ref="form" lazy-validation>
      <!-- Username -->
      <v-text-field
        v-model="auth.username"
        label="Username"
        required
      ></v-text-field>

      <!-- password -->
      <v-text-field
        v-model="auth.password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required]"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        counter
        @click:append="show = !show"
      ></v-text-field>

      <!-- nút đăng nhập -->
      <v-btn color="success" class="mr-4" @click="submit"> Submit </v-btn>

      <!-- nút qua trang sign up -->
      <v-btn :to="'/signup'" class="mr-4" color="primary">
        <v-icon left dark> mdi-key</v-icon>
        Sign Up
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
const baseApiUrl = "http://localhost:8000/auth";

export default {
  name: "SignIn",

  // All states
  data: () => ({
    // lưu giữ giá trị cho login form
    auth: {
      username: "",
      password: "",
    },

    show: false, // Dùng để mở pop up. False là không mở, True là mở

    // các quy tắc khi điền form
    rules: {
      // quy định các field bắt buộc
      required: (value) => !!value || "Required.",
    },
  }),
  methods: {
    /**
     * Function này được gọi khi nhấn nút 'Submit'
     * Gọi API đến để đăng nhập
     */
    async submit() {
      try {
        // Gọi API đăng nhập, lấy mã xác thực (Auth Token)
        const response = await this.axios.post(`${baseApiUrl}/token/login`, {
          ...this.auth,
        });

        // Sau khi xác thực thành công, lưu token vào local storage (kho nội bộ)
        localStorage.authToken = response.data.auth_token;

        // Gọi API để lấy thông tin cá nhân của người dùng hiện tại
        const meResponse = await this.axios.get(`${baseApiUrl}/users/me`, {
          // API đi kèm mã xác thực
          headers: {
            Authorization: `Token ${response.data.auth_token}`,
          },
        });

        // Sau khi lấy thông tin thành công, lưu user_id vào local storage (kho nội bộ)
        localStorage.meId = meResponse.data.id;

        // Gán authToken cho state toàn bộ (global State) -> Component nào cũng có thể xài authToken
        this.$store.commit("setAuthToken", localStorage.authToken);

        // Redirect lại về trang Home
        this.$router.push({
          name: "Home",
        });

        // Mở pop up nhỏ, báo rằng đã đăng nhập thành công
        this.$toasted.show("Logged in !!", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 2000,
        });
      } catch (e) {
        // Mở pop up nhỏ, báo rằng đã có lỗi đăng nhập
        this.$toasted.show("Could not sign in !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },
  },
};
</script>
