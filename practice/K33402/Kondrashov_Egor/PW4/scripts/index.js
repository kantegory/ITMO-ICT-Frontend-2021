function searchResults() {
    let city = document.getElementById("city").value;
    let numberOfGuests = document.getElementById("numberOfGuests").value;
    let arrivalDatetime = document.getElementById("arrival-datetime").value;
    let departureDatetime = document.getElementById("departure-datetime").value;

    let redirect_path = "search-results.html"
    let query_params = `?`
    if (city) {
        query_params += `city=${city}`
    }
    if (numberOfGuests) {
        query_params += `&number-of-guests=${numberOfGuests}`
    }
    if (arrivalDatetime) {
        query_params += `&arrival-datetime=${arrivalDatetime}`
    }
    if (departureDatetime) {
        query_params += `&departure-datetime=${departureDatetime}`
    }

    window.location.href = redirect_path + query_params;
}
