<template>
    <main class="body">
        <div class="container" >
            <div class="row">
                <div class="col-lg">
                    <h1 id="title">Мой профиль</h1>
                    <Profile />
                </div>
                <div class="col-lg-8 mt-5">
                    <h3>Закрепленные города</h3>
                    <div class="d-flex flex-column me-5" v-for="(city) in citypreforence" :key="city.id">
                        <City :city="city.city" :apiKey="'6e9d6b613a503e6f7f3f03473587c4c9'" :id="city.id" :add="false"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Profile from "@/components/Profile";
    import {mapGetters} from "vuex";
    import City from "@/components/City";
    export default {
        name: "Preferences",
        components: {City, Profile},
        mounted() {
            this.$store.dispatch('preferencesCityList')
        },
        computed: {
            ...mapGetters({
                citypreforence: 'citypreforence',
            })
        },
    }
</script>

<style scoped>
    .body{
        min-height: calc(100vh - 80px);
    }
    #title{
        margin-bottom: 20px;
        margin-top: 50px;
    }
</style>