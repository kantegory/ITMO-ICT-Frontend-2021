<template>
    <main role="main" class="registration-main">
        <div class="container">
            <div class="pt-3 d-flex justify-content-center">
                <h2>Log in</h2>
            </div>
            <LoginForm />
        </div>
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
