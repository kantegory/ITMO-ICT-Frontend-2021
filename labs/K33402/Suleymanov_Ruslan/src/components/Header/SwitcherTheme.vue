<template>
    <div>
        <button v-bind:class="{ active: $store.state.theme.theme==='dark' }" class="theme-btn"  @click="$store.commit('changeTheme', {theme: 'dark'})">
            <svg>
                <use xlink:href='#moon'></use>
            </svg>
        </button>
        <button v-bind:class="{ active: $store.state.theme.theme==='auto' }" class="theme-btn"  @click="$store.commit('changeTheme', {theme: 'auto'})">
            <svg>
                <use xlink:href="#auto"></use>
            </svg>
        </button>
        <button v-bind:class="{ active: $store.state.theme.theme==='light' }" class="theme-btn"  @click="$store.commit('changeTheme', {theme: 'light'})">
            <svg>
                <use xlink:href="#sun"></use>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        name: "SwitcherTheme"
    }
</script>

<style scoped>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>