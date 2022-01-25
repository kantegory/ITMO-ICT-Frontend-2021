<template>
    <main role="main">
        <b-container class="pb-4">
            <div class="pb-3" v-if="isLoaded == false">Loading...</div>
            <div class="pb-3" v-if="isNotFound == true">You don't have any property. You can add it <router-link to="/property/create">here</router-link></div>
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
import PropertyCard from '@/components/PropertyCard.vue'

export default {
    name: 'Property',
    components: {
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
        async getProperty () {
            this.isLoaded = false

            const url = `http://127.0.0.1:8000/property/list/?owner=${this.$store.state.id}`

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
