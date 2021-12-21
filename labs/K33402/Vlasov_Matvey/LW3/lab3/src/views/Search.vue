<template>
    <main role="main">
        <search-form @search="this.getHotels"/>
        <b-container class="pb-4">
            <div class="pb-3" v-if="isLoaded == false">Loading...</div>
            <v-row v-for="index in 5" :key="index">
                <property-card
                    v-for="propertyItem in propertyItems.slice((index - 1) * 3, Math.min((index - 1) * 3 + 3, propertyItems.length))"
                    :key="propertyItem.id"
                    :property-item="propertyItem"
                    class=""
                />
            </v-row>
        </b-container>
    </main>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import PropertyCard from '@/components/PropertyCard.vue'

export default {
    name: 'Search',
    components: {
        SearchForm,
        PropertyCard
    },

    data: () => ({
        propertyItems: [],
        isLoaded: false
    }),

    created () {
        this.getHotels()
    },

    methods: {
        async getLocationId (location) {
            const url = `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=${location}`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': this.$config.apiHost,
                    'x-rapidapi-key': this.$config.apiKey
                }
            })

            const data = await response.json()
            if (data.length > 0) {
                return data[0].dest_id
            } else {
                return null
            }
        },

        async getHotels (params = null) {
            this.isLoaded = false
            let location = null
            let guests = null
            let checkin = null
            let checkout = null

            if (params) {
                location = params.location
                guests = params.guests
                checkin = params.checkin
                checkout = params.checkout
            }

            if (!location) {
                location = 20021296
            } else {
                location = await this.getLocationId(location)
                if (location == null) return
            }

            if (!guests) {
                guests = 1
            }

            const today = new Date()
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 1)

            if (!checkin) {
                checkin = today.toISOString().slice(0, 10)
            }

            if (!checkout) {
                checkout = tomorrow.toISOString().slice(0, 10)
            }

            let url = `https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&order_by=popularity&
                        units=metric&filter_by_currency=USD&locale=en-us&room_number=1&
                        dest_id=${location}&adults_number=${guests}&
                        checkin_date=${checkin}&checkout_date=${checkout}`
            url = url.replace(/\s/g, '')

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': this.$config.apiHost,
                    'x-rapidapi-key': this.$config.apiKey
                }
            })

            const data = await response.json()

            this.propertyItems = data.result
            this.isLoaded = true
        }
    }
}
</script>
