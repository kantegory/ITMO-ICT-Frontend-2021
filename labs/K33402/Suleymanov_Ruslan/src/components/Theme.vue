<template>
    <div id="app">
        <button @click="$store.commit('changeTheme',{theme: $store.state.theme.theme==='dark'?'light':'dark'})">
            <svg class="body-item">
                <use v-bind:xlink:href='$store.state.theme.theme==="dark"?"#moon": "#sun"'></use>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        name: "Theme",
    }
</script>

<style scoped>
    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
    }
    img {
        width: 100px;
        height: 100px;
    }
</style>