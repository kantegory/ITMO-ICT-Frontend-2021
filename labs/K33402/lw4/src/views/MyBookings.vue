<template>
  <div class="home">
    <v-container>
      <h1>My bookings</h1>

      <!-- My Bookings container -->
      <div class="d-flex flex-row flex-wrap">
        <!-- Multiple Card in here -->
        <v-card
          class="my-4 mx-4"
          width="344"
          v-for="booking in bookings"
          :key="booking.id"
        >
          <!-- Card body -->
          <v-card-text>
            <div><v-icon> mdi-ticket </v-icon> Booking</div>
            <p class="text-h4 text--primary">{{ booking.booking_code }}</p>
            <p>
              <v-icon class="mx-2"> mdi-calendar </v-icon
              >{{ booking.date_checkin }} -
              <v-icon class="mx-2"> mdi-calendar </v-icon
              >{{ booking.date_checkout }}
            </p>

            <div class="text--primary">
              Room: <b>{{ booking.room.number }}</b> of Hotel:
              <b>{{ booking.room.hotel.name }}</b>
            </div>
          </v-card-text>

          <!-- Card footer -->
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
              @click="showBookingDetails(booking.id)"
            >
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>

    <!-- Pop up dialog. Component con từ thư mục /components  -->
    <BookingDetailsDialog
      :show="show"
      @onShowChanged="onShowChanged"
      :booking="bookingReport"
    />
  </div>
</template>

<script>
import BookingDetailsDialog from "../components/BookingDetailsDialog.vue";
const baseApiUrl = "http://localhost:8000/api";

export default {
  name: "Home",
  components: {
    BookingDetailsDialog, // Component được sử dụng, từ thư mục /components
  },
  // All states
  data: () => ({
    bookings: [], // Tất cả các bookings gọi từ API
    show: false, // Dùng để mở pop up. False là không mở, True là mở
    bookingReport: null, // Booking được chọn (sau khi nhấn nút Details)
  }),
  methods: {
    /**
     * Vì mình sẽ bật / tắt pop up trong component con HotelDetailsDialog.
     * Cho nên function này sẽ được đưa cho HotelDetailsDialog, để nó tắt tuỳ ý
     */
    onShowChanged(value) {
      // khi component con tắt popup (false). Chúng ta sẽ tắt cái state này đi.
      this.show = value;
    },

    /**
     * Function này được chạy khi nhấn nút details
     */
    async showBookingDetails(id) {
      try {
        // Gọi API để lấy thông tin booking
        const response = await this.axios.get(
          `${baseApiUrl}/bookings/${id}/report`,
          {
            // API đi kèm mã xác thực
            headers: {
              Authorization: `Token ${localStorage.authToken}`,
            },
          }
        );

        // gán State, sau đó mở popup dialog, để truyền data
        this.show = true;
        this.bookingReport = response.data;
      } catch (e) {
        // chạy toast (pop up nhỏ) khi không gọi api được
        this.$toasted.show("Could not get booking details !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },

    /**
     * Function này chỉ đơn giản là gọi API và trả về kết quả các bookings của người dùng
     * có trong DB. Chúng ta sẽ chạy function này mỗi khi trang được load.
     *
     * -> Lấy hết bookings của người dùng hiện tại, khi trang được load
     */
    async getMyBookings() {
      try {
        // gọi API để lấy các bookings của hành khách
        const response = await this.axios.get(
          `${baseApiUrl}/visitors/${localStorage.meId}/bookings`,
          {
            // API đi kèm mã xác thực
            headers: {
              Authorization: `Token ${localStorage.authToken}`,
            },
          }
        );

        // gán State
        this.bookings = response.data;
      } catch (e) {
        // chạy toast (pop up nhỏ) khi không gọi api được
        this.$toasted.show("Could not get bookings !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },
  },
  created() {
    // -> Lấy hết bookings khi trang được load
    this.getMyBookings();
  },
};
</script>
