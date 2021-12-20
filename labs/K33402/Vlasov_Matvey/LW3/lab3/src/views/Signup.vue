<template>
    <main role="main" class="registration-main">
        <div class="container">
            <div class="pt-3 d-flex justify-content-center">
                <h2>Sign up</h2>
            </div>
            <SignupForm />
        </div>
    </main>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'

export default {
    name: 'Signup',
    components: {
        SignupForm
    }
}
</script>
