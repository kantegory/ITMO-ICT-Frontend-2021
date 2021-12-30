<template>
  <div class="about">
    <v-container>
      <!-- Title -->
      <h1>Hotels</h1>

      <!-- Hotel Cards container -->
      <div class="d-flex flex-row flex-wrap">
        <!-- Multiple Card in here -->
        <v-card
          max-width="344"
          outlined
          class="mx-4 my-4"
          v-for="hotel in hotels"
          :key="hotel.id"
        >
          <!-- Card body -->
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                <v-icon> mdi-domain</v-icon> HOTEL
              </div>
              <v-list-item-title class="text-h5 mb-1">
                {{ hotel.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                hotel.description
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <!-- Card footer -->
          <v-card-actions>
            <v-btn outlined rounded text @click="hotelDetails(hotel.id)">
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <!-- Pop up dialog. Component con từ thư mục /components -->
      <HotelDetailsDialog
        :show="show"
        @onShowChanged="onShowChanged"
        :hotelDetails="selectedHotelDetails"
      />
    </v-container>
  </div>
</template>

<script>
import HotelDetailsDialog from "../components/HotelDetailsDialog.vue";
const baseApiUrl = "http://localhost:8000/api";

export default {
  name: "HotelSearch",
  components: {
    HotelDetailsDialog, // Component được sử dụng, từ thư mục /components
  },
  // All states
  data: () => ({
    hotels: [], // Tất cả các hotels gọi từ API
    selectedHotelDetails: null, // Hotel được chọn (sau khi nhấn nút Details)
    show: false, // Dùng để mở pop up. False là không mở, True là mở
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
    async hotelDetails(id) {
      try {
        // gọi API để lấy thông tin của hotel được chọn
        const response = await this.axios.get(
          `${baseApiUrl}/hotels/${id}/info`,
          {
            // Xác thực dùng Token
            headers: {
              Authorization: `Token ${localStorage.authToken}`,
            },
          }
        );

        // gán State, sau đó mở popup dialog, để truyền data
        this.selectedHotelDetails = response.data;
        this.show = true;
      } catch (e) {
        // chạy toast (pop up nhỏ) khi không gọi api được
        this.$toasted.show("Could not get hotel details !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },

    /**
     * Function này chỉ đơn giản là gọi API và trả về kết quả các hotels có trong DB.
     * Chúng ta sẽ chạy function này mỗi khi trang được load.
     *
     * -> Lấy hết hotels khi trang được load
     */
    async getAllHotels() {
      try {
        // gọi API để lấy tất cả các hotels
        const response = await this.axios.get(`${baseApiUrl}/hotels`, {
          headers: {
            // API đi kèm mã xác thực
            Authorization: `Token ${localStorage.authToken}`,
          },
        });

        // gán State
        this.hotels = response.data;
      } catch (e) {
        // chạy toast (pop up nhỏ) khi không gọi api được
        this.$toasted.show("Could not get hotels !!", {
          theme: "bubble",
          position: "top-right",
          duration: 2000,
        });
      }
    },
  },

  created() {
    // -> Lấy hết hotels khi trang được load
    this.getAllHotels();
  },
};
</script>
