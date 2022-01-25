<template>
    <main>
        <div class="div-btn">
            <b-button class="m-2" v-on:click="logOut">Выйти</b-button>
        </div>
        <h1> Привет, {{ userInfo.username }}</h1>
        <h2 class="mb-5">А вот твои города:</h2>
        <MetcastList />
    </main>
</template>

<script>
    import {mapGetters} from "vuex";
    import MetcastList from "@/components/Profile/MetcastList";
    import router from "@/router";

    export default {
        name: "ProfilePage",
        components: {MetcastList},
        computed: {
            ...mapGetters({
                userInfo: 'userInfo',
            })
        },
        methods: {
            logOut: function() {
                localStorage.removeItem('token');
                this.$store.commit('isAuthenticated', false);
                router.push('login')
            }
        }
    }

</script>

<style scoped>
    .div-btn {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    button {
        margin: 0 20px;
        border-radius: 3px;

    }
</style>