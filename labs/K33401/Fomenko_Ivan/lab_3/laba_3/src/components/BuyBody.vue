<template>
    <main class="container-fluid">
    <div class="container-fluid">
        <div class="row content">
            <div class="form">
                <h3 class="mb-3">Buy the ticket!</h3>
                <div class="mb-3">
                    <input type="text" id="departure" class="form-control" placeholder="From">
                </div>
                <div class="mb-3">
                    <input type="text" id="arrival" class="form-control" placeholder="To">
                </div>
                <div class="mb-3">
                    <input type="date" class="form-control" id="date" name="date" placeholder="Date">
                </div>
                <div class="mb-3">
                    <input type="time" id="time" class="form-control" placeholder="Time">
                </div>

                <div class="mb-3">
                    <select id="country" class="form-select form-select-lg form-control">
                        <option selected>Country</option>
                        <option value="1">Russia</option>
                        <option value="2">China</option>
                        <option value="3">Germany</option>
                        <option value="4">Finland</option>
                        <option value="5">Sweden</option>
                    </select>
                </div>
                <div class="mb-3">
                    <select id="aviacompany" class="form-select form-select-lg form-control">
                        <option selected>Aviacompany</option>
                        <option value="1">Very honest aviacompany</option>
                        <option value="2">Finair</option>
                        <option value="3">Air France</option>
                        <option value="4">Emirates</option>
                        <option value="5">Lufthansa</option>
                    </select>
                </div>
                <div class="mb-3">
                    <select id="personal_class" class="form-select form-select-lg form-control">
                        <option selected>Class</option>
                        <option value="1">Business class</option>
                        <option value="2">First class</option>
                        <option value="3">Economy</option>
                        <option value="4">Luggage</option>
                    </select>
                </div>
                <div class="mb-3">
                    <select id="price" class="form-select form-select-lg form-control">
                        <option selected>Price</option>
                        <option value="1">Less than 100$</option>
                        <option value="2">From 100$ to 300$</option>
                        <option value="3">From 300$ to 500$</option>
                        <option value="4">From 500$ to 1000$</option>
                        <option value="5">More than 1000$</option>
                    </select>
                </div>
                <div>
                    <a href="" class="btn btn-class" onclick="search_tickets()">Search for flight</a>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default {
  name: 'BuyBody'
}
</script>

<style scoped>

</style>
