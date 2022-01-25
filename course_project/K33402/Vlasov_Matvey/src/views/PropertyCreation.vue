<template>
    <main role="main">
        <b-container>
            <div class="pt-3 d-flex justify-content-center">
                <h2>Property Creation</h2>
            </div>
            <property-create-form />
        </b-container>
    </main>
</template>

<script>
import PropertyCreateForm from '@/components/PropertyCreateForm.vue'

export default {
    name: 'PropertyCreation',
    components: {
        PropertyCreateForm
    }
}
</script>
