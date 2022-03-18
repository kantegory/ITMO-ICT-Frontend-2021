function search() {
    this.event.preventDefault()
    let city = document.getElementById("city").value;
    let response = `forecast.html?city=${city}`;
    window.location.href = response;
}