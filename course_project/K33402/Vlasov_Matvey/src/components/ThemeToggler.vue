<template>
    <span>
        <input
            @change="toggleTheme"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox"
        />
        <label for="checkbox" class="switch-label">
            <span>☀️</span>
            <span>🌙</span>
            <div
                class="switch-toggle"
                :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
            ></div>
        </label>
    </span>
</template>

<script>
export default {
    mounted () {
        const initUserTheme = this.getMediaPreference()
        this.setTheme(initUserTheme)
    },

    data () {
        return {
            userTheme: 'light-theme'
        }
    },

    methods: {
        setTheme (theme) {
            localStorage.setItem('user-theme', theme)
            this.userTheme = theme
            document.documentElement.className = theme
        },

        toggleTheme () {
            const activeTheme = localStorage.getItem('user-theme')
            if (activeTheme === 'light-theme') {
                this.setTheme('dark-theme')
            } else {
                this.setTheme('light-theme')
            }
        },

        getMediaPreference () {
            const activeTheme = localStorage.getItem('user-theme')
            if (activeTheme !== undefined) return activeTheme
            const hasDarkPreference = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
            if (hasDarkPreference) {
                return 'dark-theme'
            } else {
                return 'light-theme'
            }
        }
    }
}
</script>

<style scoped>
.switch-checkbox {
    display: none;
}

.switch-label span {
    font-size: 1.5rem;
}
</style>
