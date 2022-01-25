<template>
    <main role="main">
        <search-form @search="this.getProperty"/>
        <b-container class="pb-4">
            <div class="pb-3" v-if="isLoaded == false">Loading...</div>
            <div class="pb-3" v-if="isNotFound == true">Results not found</div>
            <v-row v-for="index in 5" :key="index" v-else>
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
        isLoaded: false,
        isNotFound: false
    }),

    created () {
        this.getProperty()
    },

    methods: {
        async getProperty (params = null) {
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

            let url = 'http://127.0.0.1:8000/property/list/?hidden=no&'
            if (location) url += `city=${location}&`
            if (guests) url += `guests=${guests}&`
            if (checkin) url += `checkin=${checkin}&`
            if (checkout) url += `checkout=${checkout}&`

            const response = await fetch(url, {
                method: 'GET'
            })

            const data = await response.json()

            this.propertyItems = data
            this.isNotFound = this.propertyItems === undefined || this.propertyItems.length === 0
            this.isLoaded = true
        }
    }
}
</script>
