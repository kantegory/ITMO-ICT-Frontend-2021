<template>
   <b-row>
        <div class="pt-3 pt-lg-3 col-12 col-md-5 offset-md-2">
            <p>Username: {{ this.$store.state.username }}</p>
            <p>First name: {{ this.$store.state.firstName }}</p>
            <p>Last name: {{ this.$store.state.lastName }}</p>
            <p>Role: {{ this.$store.state.role }}</p>
            <router-link to="/username/change">
                <input class="mt-3 btn btn-secondary" type="button" value="Change username" /><br/>
            </router-link>
            <router-link to="/password/change">
                <input class="mt-1 btn btn-secondary" type="button" value="Change password" />
            </router-link>
        </div>
        <div class="pt-3 pt-lg-3 mt-3 mt-md-0 mx-md-3 col-12 col-md-4">
            <p><router-link to="/bookings">My bookings</router-link></p>
            <p v-if="this.$store.state.role === 'landlord'"><router-link to="/property">My property</router-link></p>
            <p v-if="this.$store.state.role === 'landlord'"><router-link to="/property/create">Create property</router-link></p>
        </div>
    </b-row>
</template>

<style scoped>
p, a {
    font-size: 1.5rem;
    margin-bottom: 0;
}
</style>
