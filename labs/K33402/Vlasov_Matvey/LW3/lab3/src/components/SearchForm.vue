<template>
    <main role="main">
        <div class="container">
            <form @submit.prevent="search" ref="form">
                <input class="col-md-3" id="location" type="text" placeholder="Location" v-model="location">
                <input class="col-md-2" id="guests" type="number" min="1" placeholder="Guests" v-model="guests">
                <input class="col-md-2" id="checkin" type="text" placeholder="Check in" onfocus="(this.type='date')" v-model="checkin">
                <input class="col-md-2" id="checkout" type="text" placeholder="Check out" onfocus="(this.type='date')" v-model="checkout">
                <button class="btn btn-primary col-md-2" type="submit">Search</button>
            </form>
        </div>
    </main>
</template>

<script>

export default {
    data: () => ({
        location: '',
        guests: '',
        checkin: '',
        checkout: ''
    }),

    methods: {
        search () {
            this.$emit('search', {
                location: this.location,
                guests: this.guests,
                checkin: this.checkin,
                checkout: this.checkout
            })
        }
    }
}
</script>

<style scoped>
.btn {
    margin: 1.5rem 0.3rem;
}

::placeholder, input, textarea {
    color: var(--color-placeholder);
    background-color: var(--background-color-input);
}
</style>
