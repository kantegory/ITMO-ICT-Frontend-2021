<template>
    <div class="card col-md-4">
        <router-link :to="{ name: 'PropertyDetail', params: { id: propertyItem.id.toString() }}">
            <img class="card-img-top" src="@/assets/img/property_image.jpg" >
        </router-link>
        <div class="card-body">
            <p class="card-location"><b-icon icon="flag" font-scale="0.99" class="fa"></b-icon>{{ propertyItem.city }}</p>
            <p class="card-text"><span class="red-star">★</span> {{ grade }}
                <span class="reviews">({{ reviewsNum }} reviews)</span>
            </p>
            <router-link :to="{ name: 'PropertyDetail', params: { id: propertyItem.id.toString() }}">
                <p class="card-text">{{ propertyItem.title }}</p>
                <p class="card-text"><b>${{ Math.round(propertyItem.price) }} </b> / night</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyCard',

    props: {
        propertyItem: Object
    },
    data: () => ({
        grade: '-',
        reviewsNum: 0
    }),
    created () {
        this.getReviewInfo()
    },
    methods: {
        async getReviewInfo () {
            const url = `http://127.0.0.1:8000/review/list/?property=${this.propertyItem.id}`
            const response = await fetch(url, {
                method: 'GET'
            })

            const data = await response.json()
            if (data === undefined || data.length === 0) return

            this.reviewsNum = data.length
            let sum = 0
            for (const i of Array(this.reviewsNum).keys()) {
                sum += data[i].grade
            }
            this.grade = sum / this.reviewsNum
            this.grade = +this.grade.toFixed(2)
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
