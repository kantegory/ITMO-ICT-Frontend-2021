import axios from "axios";

export default {
  searchHotelsByGeolocation: function ({
    lat,
    lng,
    checkInDate,
    checkOutDate,
    adults,
  }) {
    return axios.get(
      "https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby",
      {
        params: {
          latitude: lat,
          longitude: lng,
          checkin_date: checkInDate,
          checkout_date: checkOutDate,
          sort_order: "STAR_RATING_HIGHEST_FIRST",
          adults_number: adults,
          locale: "en_US",
          currency: "USD",
        },
        headers: {
          "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
          "x-rapidapi-key":
            "37aa002206mshf7ea8e63e95b874p17c2bajsn1348ea93babf",
        },
      }
    );
  },
};
