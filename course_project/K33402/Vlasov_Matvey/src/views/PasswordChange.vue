<template>
    <main role="main">
        <b-container>
            <div class="pt-3 d-flex justify-content-center">
                <h2>Password Change</h2>
            </div>
            <password-change-form />
        </b-container>
    </main>
</template>

<script>
import PasswordChangeForm from '@/components/PasswordChangeForm.vue'

export default {
    name: 'PasswordChange',
    components: {
        PasswordChangeForm
    }
}
</script>
