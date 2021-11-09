function searchResults () {
    city = document.getElementById("city").value;
    numberOfGuests = document.getElementById("numberOfGuests").value;
    arrivalDatetime = document.getElementById("arrival-datetime").value;
    departureDatetime = document.getElementById("departure-datetime").value;

    redirect_path = `search-results.html?`
    if (city) {
        redirect_path += `&city=${city}`
    }
    if (numberOfGuests) {
        redirect_path += `&number-of-guests=${numberOfGuests}`
    }
    if (arrivalDatetime) {
        redirect_path += `&arrival-datetime=${arrivalDatetime}`
    }
    if (departureDatetime) {
        redirect_path += `&departure-datetime=${departureDatetime}`
    }

    window.location.href = redirect_path;
}
