<template>
    <div class="card col-md-4">
        <router-link :to="{ name: 'BookingDetail', params: { id: bookingItem.id.toString() }}">
            <img class="card-img-top" src="@/assets/img/property_image.jpg" >
        </router-link>
        <div class="card-body">
            <p class="card-location"><b-icon icon="flag" font-scale="0.99" class="fa"></b-icon>{{ bookingItem.property.city }}</p>
            <router-link :to="{ name: 'BookingDetail', params: { id: bookingItem.id.toString() }}">
                <p class="card-text">{{ bookingItem.property.title }}</p>
                <p class="card-text">Check in: {{ bookingItem.checkin }}</p>
                <p class="card-text">Check out: {{ bookingItem.checkout }}</p>
                <p class="card-text">Price: ${{ bookingItem.total_price }}</p>
                <p class="card-text">Status: {{ bookingItem.status }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookingCard',

    props: {
        bookingItem: Object
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

.card-body p {
    line-height: 0.8rem;
}

p.card-text {
    color: var(--color-main);
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

a:hover {
    text-decoration-color: var(--color-main);
}
</style>
