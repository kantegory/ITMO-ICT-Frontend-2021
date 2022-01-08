<template>
    <div class="windowMe row">
        <img class="col" alt="" src="../../public/Me.png">
        <div class="col pb-2">
            <h5 class="mt-5 city"> {{ username }}</h5>
            <h6 class="mt-2">{{ email }}</h6>
            <router-link to="/preferences" v-if="this.$route.path!=='/preferences'"><p>Мои города-></p></router-link>
            <router-link to="/" v-if="this.$route.path!=='/'"><p>Все города-></p></router-link>
            <button @click="logOut" type="submit" class="mt-5 pt- btn btn-danger">Выйти</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import router from "@/router";

    export default {
        name: "Profile",
        mounted() {
            this.$store.dispatch('mountedProfile')
        },
        computed: {
            ...mapGetters({
                username: 'username',
                email: 'email',
            })
        },
        methods: {
            logOut() {
                localStorage.removeItem('token')
                router.push('/signin')
            }
        }
    }
</script>

<style scoped>
    .windowMe{
        margin-right: 30px;
        box-shadow: 2px 5px 10px rgba(0 0 0 0.10);
        border-radius: 20px;
    }
    .windowMe img{
        padding: 20px 5px 20px 5px;
    }
</style>