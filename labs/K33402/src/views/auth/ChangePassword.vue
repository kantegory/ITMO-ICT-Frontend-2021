<template>
  <div class="home">
    <v-container>
      <h1>My Credentials</h1>

      <!-- Card Đổi mật khẩu -->
      <v-card class="px-5 py-5" width="400">
        <!-- Tiêu đề -->
        <v-card-title>Change your password</v-card-title>

        <!-- Form đổi mật khẩu -->
        <v-form ref="form" lazy-validation>
          <!-- Mật khẩu cũ (old password) -->
          <v-text-field
            v-model="auth.oldPass"
            :append-icon="show.showOld ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show.showOld ? 'text' : 'password'"
            name="old-pass"
            label="Old Password"
            counter
            @click:append="show.showOld = !show.showOld"
          ></v-text-field>

          <!-- Mật khẩu mới (new password) -->
          <v-text-field
            v-model="auth.newPass"
            :append-icon="show.showNew ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show.showNew ? 'text' : 'password'"
            name="new-pass"
            label="New Password"
            counter
            @click:append="show.showNew = !show.showNew"
          ></v-text-field>

          <!-- Điền lại mật khẩu mới (confirm new password) -->
          <v-text-field
            v-model="auth.confirmPass"
            :append-icon="show.showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show.showConfirm ? 'text' : 'password'"
            name="new-pass"
            label="New Password"
            counter
            @click:append="show.showConfirm = !show.showConfirm"
          ></v-text-field>

          <!-- nút đổi mật khẩu -->
          <v-btn color="success" class="mr-4" @click="submit"> Change </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
const baseApiUrl = "http://localhost:8000/auth/users/set_password/";

export default {
  name: "Home",
  components: {},

  // All states
  data: () => ({
    // lưu giữ giá trị cho change password form
    auth: {
      oldPass: "",
      newPass: "",
      confirmPass: "",
    },

    // các quy tắc khi điền form
    rules: {
      // quy định các field bắt buộc
      required: (value) => !!value || "Required.",
    },

    // Dùng để bật / tắt con mắt password
    show: {
      showOld: false,
      showNew: false,
      showConfirm: false,
    },
  }),
  methods: {
    /**
     * Function này được gọi khi nhấn nút 'Submit'
     * Gọi API đến để đổi mật khẩu
     */
    async submit() {
      try {
        // Gọi API đôi mật khẩu
        await this.axios.post(
          baseApiUrl,
          {
            current_password: this.auth.oldPass,
            new_password: this.auth.newPass,
            re_new_password: this.auth.confirmPass,
          },
          {
            // API đi kèm mã xác thực
            headers: {
              Authorization: `Token ${localStorage.authToken}`,
            },
          }
        );

        // Mở pop up nhỏ, báo rằng đã Tạo tài khoản thành công
        this.$toasted.show("Password changed !!", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 2000,
        });
      } catch (e) {
        // Mở pop up nhỏ, báo rằng đã có lỗi đổi mật khẩu
        this.$toasted.show("Could not change password !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },
  },
};
</script>
