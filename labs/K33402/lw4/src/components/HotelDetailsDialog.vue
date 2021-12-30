<template>
  <!-- Dialog sẽ được mở khi giá trị 'show' == true -->
  <v-dialog v-model="show" width="500">
    <!-- Card bên trong -->
    <v-card v-if="hotelDetails">
      <v-container>
        <!-- Card về thông tin khách sạn Hotel -->
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5">
            {{ hotelDetails.Hotel.name }}
          </v-card-title>

          <v-card-subtitle>{{
            hotelDetails.Hotel.description
          }}</v-card-subtitle>
          <v-card-text>
            <v-icon> mdi-pin</v-icon> {{ hotelDetails.Hotel.address }}
          </v-card-text>
        </v-card>

        <div class="mt-5">
          <strong>Owner Contact</strong>

          <div v-if="hotelDetails">
            <!-- Card về thông tin Chủ khách sạn (Owner) -->
            <v-card color="#385F73" dark class="px-5 py-5">
              <p>
                <v-icon> mdi-pen</v-icon>
                {{
                  hotelDetails.Hotel.owner.first_name +
                  " " +
                  hotelDetails.Hotel.owner.last_name
                }}
              </p>
              <p>
                <v-icon> mdi-pen</v-icon>
                {{ hotelDetails.Hotel.owner.username }}
              </p>
              <p><v-icon> mdi-pin</v-icon> {{ hotelDetails.Hotel.address }}</p>
              <p>
                <v-icon> mdi-email</v-icon> {{ hotelDetails.Hotel.owner.email }}
              </p>
              <p>
                <v-icon> mdi-phone</v-icon> {{ hotelDetails.Hotel.owner.phone }}
              </p>
            </v-card>
          </div>
        </div>

        <v-divider></v-divider>

        <div class="mt-3">
          <strong>Extra info</strong>
          <!-- Card về thông tin bên lề -->
          <v-card color="#385F73" dark>
            <v-card-text>
              <strong>Total Rooms: </strong> {{ hotelDetails.Hotel.address }}
            </v-card-text>
            <v-card-text>
              <strong>Min Price: </strong> {{ hotelDetails.Info.min_price }}
            </v-card-text>
            <v-card-text>
              <strong>Max Price: </strong> {{ hotelDetails.Info.max_price }}
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "HotelDetails",
  //Giá trị Component cha cần truyền vào
  props: [
    "hotelDetails", // Object hotel -> thông tin về hotel
    "show", // Show -> có nên mở pop up (true) hay tắt (false)
  ],
  methods: {},
  
  // Theo dõi sự thay đổi của state
  watch: {
    // Nếu 'show' thay đổi, báo cho lớp cha biết rằng 'show' đã tắt.
    show: function (value) {
      this.$emit("onShowChanged", value);
    },
  },
};
</script>
