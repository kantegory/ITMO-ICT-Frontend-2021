<template>
    <form @submit.prevent="edit">
        <b-alert show variant="danger" v-if="error" class="mb-2">
            {{ this.error }}
        </b-alert>
        <b-alert show variant="success" v-if="success" class="mb-2">
            You successfully edited your property
        </b-alert>
        City: <input class="mt-1 mb-2 col-md-6" id="city" type="text" maxlength="50" v-model="city">
        Address: <input class="mt-1 mb-2 col-md-6" id="address" type="text" maxlength="50" v-model="address">
        Title: <input class="mt-1 mb-2 col-md-6" id="title" type="text" maxlength="50" v-model="title">
        Description: <input class="mt-1 mb-2 col-md-6" id="description" type="text" maxlength="500" v-model="description">
        Guest limit: <input class="mt-1 mb-2 col-md-2" id="guestLimit" type="number" min="1" max="100" v-model="guestLimit">
        Price per night: <input class="mt-1 col-md-2" id="price" type="number" min="1" max="100000" v-model="price">
        Check the box below if you want to hide the property for some time: <input class="mt-1 col-md-1" id="hidden" type="checkbox" v-model="isHidden">
        <button class="btn btn-primary col-md-2" type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'PropertyEditForm',

    props: {
        propertyItem: Object
    },
    data: () => ({
        city: '',
        address: '',
        title: '',
        description: '',
        guestLimit: '',
        price: '',
        isHidden: '',
        error: '',
        success: false
    }),

    created () {
        this.getPropertyInfo(this.propertyItem)
    },

    methods: {
        async edit () {
            const url = `http://127.0.0.1:8000/property/update/${this.propertyItem.id}`

            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
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
                this.getPropertyInfo(data)
                this.$emit('propertyUpdated', {
                    propertyItem: data
                })
            } else {
                this.error = Object.values(data)[0].toString()
            }
        },
        getPropertyInfo (src) {
            this.city = src.city
            this.address = src.address
            this.title = src.title
            this.description = src.description
            this.guestLimit = src.guest_limit
            this.price = src.price
            this.isHidden = src.is_hidden
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
