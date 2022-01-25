<template>
   <form @submit.prevent="review">
        <b-alert show variant="success" v-if="success" class="mb-0">
            Your review has been published
        </b-alert>
        Grade:
        <span class="mx-3">
            <input class="my-2" id="grade" type="number" min="1" max="5" placeholder="no" required v-model="grade">
        </span>
        <br />
        Comment:
        <br />
        <textarea class="col-md-12" rows="4" id="comment" type="text" maxlength="500" placeholder="Comment" v-model="comment"></textarea>

        <button class="mt-0 btn btn-primary col-md-2" type="submit">Review</button>
    </form>
</template>

<script>
export default {
    name: 'BookingReviewForm',

    props: {
        BookingItem: Object
    },
    data: () => ({
        grade: '',
        comment: '',
        success: false,
        isReviewCreated: false
    }),
    created () {
        this.getReviewInfo()
    },
    methods: {
        async review () {
            let url = 'http://127.0.0.1:8000/review/create/'
            let requestMethod = 'POST'
            if (this.isReviewCreated) {
                url = `http://127.0.0.1:8000/review/update/${this.BookingItem.id}`
                requestMethod = 'PATCH'
            }

            const response = await fetch(url, {
                method: requestMethod,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    booking: this.BookingItem.id,
                    grade: this.grade,
                    comment: this.comment
                })
            })

            this.success = response.ok
        },
        async getReviewInfo () {
            const url = `http://127.0.0.1:8000/review/list/?booking=${this.BookingItem.id}`
            const response = await fetch(url, {
                method: 'GET'
            })

            const data = await response.json()
            if (data === undefined || data.length === 0) return
            this.grade = data[0].grade
            this.comment = data[0].comment
            this.isReviewCreated = true
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
