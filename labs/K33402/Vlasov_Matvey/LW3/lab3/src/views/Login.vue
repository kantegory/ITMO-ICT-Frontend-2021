<template>
    <main role="main">
        <b-container>
            <div class="pt-3 d-flex justify-content-center">
                <h2>Log in</h2>
            </div>
            <login-form />
        </b-container>
    </main>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>
