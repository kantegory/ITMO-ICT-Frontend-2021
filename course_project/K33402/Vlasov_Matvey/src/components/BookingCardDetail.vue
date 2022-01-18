<template>
    <div class="card p-3" v-if="bookingItem.id">
        <template v-if="!this.$store.state.isLogged">
            <b-alert show>
                <router-link to="/login">Log in</router-link> to see the information about your booking
            </b-alert>
        </template>
        <template v-else-if="this.$store.state.id !== bookingItem.tenant.user.id && this.$store.state.id !== bookingItem.property.owner.user.id">
            <b-alert show variant="danger">
                You cannot see the information about this booking
            </b-alert>
        </template>
        <b-row v-else>
            <img class="col-md-4 mt-0" src="@/assets/img/property_image.jpg" >
            <div class="col-md-8 card-body">
                <p class="card-location"><b-icon icon="flag" font-scale="0.99" class="fa"></b-icon>{{ bookingItem.property.city }}</p>
                <p class="card-text">{{ bookingItem.property.title }}
                    <router-link :to="{ name: 'PropertyDetail', params: { id: bookingItem.property.id.toString() }}">
                        <b-icon class="mx-1" icon="info-circle-fill" scale="1.1" variant="info"></b-icon>
                    </router-link>
                </p>
                <p class="card-text" v-if="this.$store.state.id === bookingItem.property.owner.user.id">Tenant: {{ bookingItem.tenant.user.username }}</p>
                <p class="card-text">Check in: {{ bookingItem.checkin }}</p>
                <p class="card-text">Check out: {{ bookingItem.checkout }}</p>
                <p class="card-text">Price: ${{ bookingItem.total_price }}</p>
                <p class="card-text">Status: {{ bookingItem.status }}</p>

                <button v-if="!isCancelled && !isPassed && this.$store.state.id === bookingItem.tenant.user.id" class="btn btn-danger col-md-4" v-on:click="cancelBooking">Cancel booking</button>
            </div>
        </b-row>
        <div v-if="!isCancelled && isPassed && this.$store.state.id === bookingItem.tenant.user.id" class="mt-3 col-md-12">
            <booking-review-form :booking-item="bookingItem" />
        </div>
    </div>
</template>

<script>
import BookingReviewForm from '@/components/BookingReviewForm.vue'

export default {
    name: 'BookingCardDetail',

    components: {
        BookingReviewForm
    },
    props: {
        bookingItemId: String
    },
    data: () => ({
        bookingItem: Object,
        isCancelled: false,
        isPassed: false
    }),
    created () {
        this.getBookingItem()
    },
    methods: {
        async getBookingItem () {
            const url = `http://127.0.0.1:8000/booking/list/?id=${this.bookingItemId}`
            const response = await fetch(url, {
                method: 'GET'
            })

            const data = await response.json()
            if (data === undefined || data.length === 0) return
            this.bookingItem = data[0]

            this.isCancelled = this.bookingItem.status === 'CANCELLED'
            this.isPassed = Date.now() > Date.parse(this.bookingItem.checkin)
        },
        async cancelBooking () {
            const url = `http://127.0.0.1:8000/booking/update/${this.bookingItem.id}`

            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'CANCELLED'
                })
            })
            if (response.ok) {
                this.bookingItem.status = 'CANCELLED'
                this.isCancelled = true
            }
        }
    }
}
</script>

<style scoped>
.card {
    background-color: var(--background-color-card);
}

.card-location {
    color: #0091ff;
}

.card-body p {
    line-height: 0.8rem;
}

p.card-text {
    line-height: 1.0rem;
}

.red-star {
    color: red;
}

.fa {
    padding-right: 1.5rem;
    font-size: 1.5rem;
    width: 1rem;
}
</style>
