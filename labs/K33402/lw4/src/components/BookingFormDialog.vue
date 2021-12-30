<template>
  <!-- Dialog sẽ được mở khi giá trị 'show' == true -->
  <v-dialog v-model="show" width="500">
    <!-- Card bên trong -->
    <v-card>
      <!-- Card title -->
      <v-card-title class="text-h5 grey lighten-2">
        Booking Form for Room {{ room }}
      </v-card-title>

      <v-container>
        <!-- Chọn ngày Check In -->
        <v-menu
          ref="menu_checkin"
          v-model="menu_checkin"
          :close-on-content-click="false"
          :return-value.sync="bookingForm.date_checkin"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- Text Field để điền ngày -->
            <v-text-field
              v-model="bookingForm.date_checkin"
              label="Date Check-in"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>

          <!-- Popup nhỏ để chọn ngày -->
          <v-date-picker v-model="bookingForm.date_checkin" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu_checkin = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu_checkin.save(bookingForm.date_checkin)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <!-- Chọn ngày Check Out -->
        <v-menu
          ref="menu_checkout"
          v-model="menu_checkout"
          :close-on-content-click="false"
          :return-value.sync="bookingForm.date_checkout"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- Text Field để điền ngày -->

            <v-text-field
              v-model="bookingForm.date_checkout"
              label="Date Check-out"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <!-- Popup nhỏ để chọn ngày -->

          <v-date-picker
            v-model="bookingForm.date_checkout"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu_checkout = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu_checkout.save(bookingForm.date_checkout)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-container>

      <v-divider></v-divider>

      <!-- Card Footer -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="createBooking">
          Make a booking
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const baseApiUrl = "http://localhost:8000/api/bookings/create";

export default {
  name: "BookingFormDialog",

  //Giá trị Component cha cần truyền vào
  props: [
    "show", // Show -> có nên mở pop up (true) hay tắt (false)
    "room", // Object room -> thông tin về room
  ],
  data: () => ({
    bookingForm: {
      // Ngày check in mặc định, theo giờ quốc tế
      date_checkin: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),

      // Ngày check out mặc định, theo giờ quốc tế
      date_checkout: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
    },

    // Hiện menu để chọn ngày checkin (false = tắt, true = mở)
    menu_checkin: false,

    // Hiện menu để chọn ngày checkout (false = tắt, true = mở)
    menu_checkout: false,

    // các quy tắc khi điền form
    rules: {
      // quy định các field bắt buộc
      required: (value) => !!value || "Required.",
    },
  }),
  methods: {
    /**
     * Function này được gọi khi nhấn nút 'Make a booking'
     * Gọi API đến tạo booking
     */
    async createBooking() {
      try {
        // Gọi API để tạo booking
        await this.axios.post(baseApiUrl, {
          ...this.bookingForm,
          main_guest: localStorage.meId,
          room: this.room,
        }, {
            // Xác thực dùng Token
            headers: {
              Authorization: `Token ${localStorage.authToken}`,
            },
          });

        // báo cho Component cha biết rằng Booking Form Dialog sẽ đóng lại
        this.$emit("onShowChanged", false);

        // Chạy pop up nhỏ, báo rằng đã book thành công
        this.$toasted.show("Booking Created !!", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 2000,
        });
      } catch (e) {
        // Chạy pop up nhỏ, báo rằng đã có lỗi
        this.$toasted.show("Could not create booking !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },
  },

  // Theo dõi sự thay đổi của state
  watch: {
    // Nếu 'show' thay đổi, báo cho lớp cha biết rằng 'show' đã tắt.
    show: function (value) {
      this.$emit("onShowChanged", value);
    },
  },
};
</script>
