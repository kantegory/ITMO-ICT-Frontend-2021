<template>
    <form @submit.prevent="book">
        <b-alert show variant="danger" v-if="error" class="mb-0">
            {{ this.error }}
        </b-alert>
        <b-alert show variant="success" v-if="success" class="mb-0">
            You successfully booked this property. Now you can see it in <router-link to="/bookings"> your bookings</router-link>
        </b-alert>
        <input class="col-md-2" id="guests" type="number" min="1" placeholder="Guests" required v-model="guests">
        <input class="col-md-3" id="checkin" type="text" placeholder="Check in" onfocus="(this.type='date')" required v-model="checkin">
        <input class="col-md-3" id="checkout" type="text" placeholder="Check out" onfocus="(this.type='date')" required v-model="checkout">
        <button class="btn btn-primary col-md-2" type="submit">Book</button>
    </form>
</template>

<script>
export default {
    name: 'PropertyBookingForm',

    props: {
        propertyItem: Object
    },
    data: () => ({
        guests: '',
        checkin: '',
        checkout: '',
        error: '',
        success: false
    }),
    methods: {
        async book () {
            if (this.guests > this.propertyItem.guest_limit) {
                this.success = false
                this.error = `Maximum number of guests is ${this.propertyItem.guest_limit}`
                return
            }

            const url = 'http://127.0.0.1:8000/booking/create/'

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tenant: this.$store.state.id,
                    property: this.propertyItem.id,
                    checkin: this.checkin,
                    checkout: this.checkout
                })
            })

            const data = await response.json()

            this.success = response.ok

            if (this.success) {
                this.error = ''
            } else {
                this.error = Object.values(data)[0].toString()
            }
        }
    }
}
</script>

<style scoped>
.btn {
    margin: 1.5rem 0.3rem;
}

::placeholder, input, textarea {
    color: #0091ff;
    background-color: var(--background-color-input);
}
</style>
