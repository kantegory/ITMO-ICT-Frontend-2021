<template>
    <div class="card p-3" v-if="propertyItem.id">
        <b-row>
            <img class="col-md-4 mt-0 card-img-top" src="@/assets/img/property_image.jpg" >
            <div class="col-md-8 card-body">
                <p class="card-location"><b-icon icon="flag" font-scale="0.99" class="fa"></b-icon>{{ propertyItem.city }}</p>
                <p class="card-location"><b-icon icon="flag" font-scale="0.99" class="fa"></b-icon>{{ propertyItem.address }}</p>
                <p class="card-text"><span class="red-star">★</span> {{ grade }}
                    <span class="reviews">({{ reviewItems.length }} reviews)</span>
                </p>
                <p class="card-text">{{ propertyItem.title }}</p>
                <p class="card-text">{{ propertyItem.description }}</p>
                <p class="card-price"><span class="price">${{ Math.round(propertyItem.price) }} </span> / night</p>
                <template v-if="propertyItem.is_hidden">
                    <b-alert show variant="danger">
                        This property is now unavailable for the rent
                    </b-alert>
                </template>

                <template v-if="!this.$store.state.isLogged">
                    <b-alert show>
                        <router-link to="/login">Log in</router-link> to book this property
                    </b-alert>
                </template>
                <property-booking-form :property-item="propertyItem" v-else-if="this.$store.state.role === 'tenant'" />
            </div>
        </b-row>
        <div class="pt-3" v-if="isOwner">
            <property-edit-form :property-item="propertyItem" @propertyUpdated="updateProperty" />
        </div>
        <div class="pt-3">
            <review-card
                v-for="reviewItem in reviewItems"
                :key="reviewItem.id"
                :review-item="reviewItem"
                class=""
            />
        </div>
    </div>
</template>

<script>
import PropertyBookingForm from '@/components/PropertyBookingForm.vue'
import PropertyEditForm from '@/components/PropertyEditForm.vue'
import ReviewCard from '@/components/ReviewCard.vue'

export default {
    name: 'PropertyCardDetail',

    components: {
        PropertyBookingForm,
        PropertyEditForm,
        ReviewCard
    },
    props: {
        propertyItemId: String
    },
    data: () => ({
        propertyItem: Object,
        reviewItems: [],
        grade: '-',
        isOwner: false
    }),
    created () {
        this.getPropertyItem()
    },
    methods: {
        async getPropertyItem () {
            const url = `http://127.0.0.1:8000/property/list/?id=${this.propertyItemId}`
            const response = await fetch(url, {
                method: 'GET'
            })

            const data = await response.json()
            if (data === undefined || data.length === 0) return
            this.propertyItem = data[0]
            this.getReviewInfo()
            this.isOwner = this.propertyItem.owner.user.id === this.$store.state.id
        },
        async getReviewInfo () {
            const url = `http://127.0.0.1:8000/review/list/?property=${this.propertyItem.id}`
            const response = await fetch(url, {
                method: 'GET'
            })

            const data = await response.json()
            if (data === undefined || data.length === 0) return

            this.reviewItems = data.reverse()
            let sum = 0
            for (const i of Array(this.reviewItems.length).keys()) {
                sum += data[i].grade
            }
            this.grade = sum / this.reviewItems.length
            this.grade = +this.grade.toFixed(2)
        },
        updateProperty (params) {
            this.propertyItem = params.propertyItem
        }
    }
}
</script>

<style scoped>
.card {
    background-color: var(--background-color-card);
}

.card-img-top {
    margin-top: 1rem;
}

.card-location {
    color: #0091ff;
}

.price {
    font-weight: bold;
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

.reviews {
    color: var(--color-main);
}

.fa {
    padding-right: 1.5rem;
    font-size: 1.5rem;
    width: 1rem;
}
</style>
