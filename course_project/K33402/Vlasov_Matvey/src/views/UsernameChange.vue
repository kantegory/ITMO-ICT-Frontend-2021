<template>
    <main role="main">
        <b-container>
            <div class="pt-3 d-flex justify-content-center">
                <h2>Username Change</h2>
            </div>
            <username-change-form />
        </b-container>
    </main>
</template>

<script>
import UsernameChangeForm from '@/components/UsernameChangeForm.vue'

export default {
    name: 'UsernameChange',
    components: {
        UsernameChangeForm
    }
}
</script>
