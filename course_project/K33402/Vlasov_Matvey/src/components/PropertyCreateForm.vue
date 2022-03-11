<template>
<div class="d-flex justify-content-center">
    <form @submit.prevent="create">
        <b-alert show variant="danger" v-if="error" class="mb-2">
            {{ this.error }}
        </b-alert>
        <b-alert show variant="success" v-if="success" class="mb-2">
            You successfully created new property. Now you can see it in <router-link to="/property"> your property</router-link>
        </b-alert>
        City: <input class="mt-1 mb-2 col-md-12" id="city" type="text" maxlength="50" v-model="city" required>
        Address: <input class="mt-1 mb-2 col-md-12" id="address" type="text" maxlength="50" v-model="address" required>
        Title: <input class="mt-1 mb-2 col-md-12" id="title" type="text" maxlength="50" v-model="title" required>
        Description: <input class="mt-1 mb-2 col-md-12" id="description" type="text" maxlength="500" v-model="description" required>
        Guest limit: <input class="mt-1 mb-2 col-md-3" id="guestLimit" type="number" min="1" max="100" v-model="guestLimit" required>
        Price per night: <input class="mt-1 col-md-3" id="price" type="number" min="1" max="100000" v-model="price" required>
        Check the box below if you want to hide the property for some time: <input class="mt-1 col-md-1" id="hidden" type="checkbox" v-model="isHidden">
        <button class="btn btn-primary col-md-3" type="submit">Submit</button>
    </form>
    </div>
</template>

<script>
export default {
    name: 'PropertyCreateForm',

    data: () => ({
        city: '',
        address: '',
        title: '',
        description: '',
        guestLimit: '',
        price: '',
        isHidden: false,
        error: '',
        success: false
    }),

    methods: {
        async create () {
            const url = 'http://127.0.0.1:8000/property/create/'

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    owner: this.$store.state.id,
                    city: this.city,
                    address: this.address,
                    title: this.title,
                    description: this.description,
                    guest_limit: this.guestLimit,
                    price: this.price,
                    is_hidden: this.isHidden
                })
            })

            const data = await response.json()
            this.success = response.ok

            if (this.success) {
                this.error = ''
            } else {
                this.error = Object.values(data)[0].toString()
            }
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
    border-width: 0.5rem;
}

input {
    display: block;
}
</style>
