<template>
    <div class="card col-md-4">
        <img class="card-img-top" :src="propertyItem.max_photo_url" >
        <div class="card-body">
            <p class="card-location"><b-icon icon="flag" font-scale="0.99" class="fa"></b-icon>{{ propertyItem.city_trans}}, {{ propertyItem.country_trans}}</p>
            <p class="card-rating"><span class="red-star">★</span> {{ propertyItem.review_score}}
                <span class="reviews">({{ propertyItem.review_nr}} reviews)</span>
            </p>
            <p class="card-text">{{ propertyItem.hotel_name}}</p>
            <p class="card-price"><span class="price">{{ Math.round(propertyItem.min_total_price) }} {{ propertyItem.currency_code}} </span> / night</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyCard',

    props: {
        propertyItem: Object
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
