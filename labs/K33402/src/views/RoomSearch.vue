<template>
  <div class="about">
    <v-container>
      <!-- Title -->
      <h1>Room Page</h1>

      <!-- Hotel Cards container -->
      <div class="d-flex flex-row flex-wrap">
        <!-- Multiple Card in here -->
        <v-card
          elevation="6"
          width="400"
          class="my-4 mx-4"
          shaped
          v-for="room in rooms"
          :key="room.id"
        >
          <!-- Card body -->
          <v-card-title>
            Room {{ room.number }} of Hotel: {{ room.hotel.name }}
          </v-card-title>

          <v-card-subtitle>
            <v-icon> mdi-pin</v-icon>
            {{ room.hotel.address }}
          </v-card-subtitle>

          <v-card-text>
            {{ room.hotel.description }}
          </v-card-text>

          <v-divider> </v-divider>

          <!-- Card footer -->
          <v-card-actions>
            <v-card-text>
              <b class="subtitle-1">${{ room.price }} </b> / night
            </v-card-text>
            <v-btn
              class="mx-4"
              depressed
              elevation="2"
              @click="bookRoom(room.id)"
            >
              Book
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <!-- Pop up dialog. Component con từ thư mục /components -->
      <BookingFormDialog
        :show="show"
        @onShowChanged="onShowChanged"
        :room="selectedRoom"
      />
    </v-container>
  </div>
</template>

<script>
import BookingFormDialog from "../components/BookingFormDialog.vue";
const baseApiUrl = "http://localhost:8000/api";

export default {
  name: "RoomSearch",
  components: {
    BookingFormDialog, // Component được sử dụng, từ thư mục /components
  },

  // state
  data: () => ({
    rooms: [], // Tất cả các rooms gọi từ API
    show: false, // Dùng để mở pop up. False là không mở, True là mở
    selectedRoom: null, // Room được chọn (sau khi nhấn nút Book)
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
     * Function này chỉ đơn giản là gọi API và trả về kết quả các rooms có trong DB.
     * Chúng ta sẽ chạy function này mỗi khi trang được load.
     *
     * -> Lấy hết rooms khi trang được load
     */
    async getAllRooms() {
      try {
        // gọi API để lấy tất cả các rooms (phòng)
        const response = await this.axios.get(`${baseApiUrl}/rooms`, {
          headers: {
            // API đi kèm mã xác thực
            Authorization: `Token ${localStorage.authToken}`,
          },
        });

        // gán State
        this.rooms = response.data;
      } catch (e) {
        // chạy toast (pop up nhỏ) khi không gọi api được
        this.$toasted.show("Could not get all rooms !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },
    /**
     * Function này được chạy khi nhấn nút Book
     */
    async bookRoom(id) {
      // Gán state và mở popup
      this.selectedRoom = id;
      this.show = true;
    },
  },
  created() {
    // -> Lấy hết hotels khi trang được load
    this.getAllRooms();
  },
};
</script>
