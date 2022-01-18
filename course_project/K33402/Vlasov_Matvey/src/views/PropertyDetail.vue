<template>
    <main role="main">
        <b-container class="py-4">
            <property-card-detail :property-item-id="this.$route.params.id"  />
        </b-container>
    </main>
</template>

<script>
import PropertyCardDetail from '@/components/PropertyCardDetail.vue'

export default {
    name: 'PropertyDetail',
    components: {
        PropertyCardDetail
    }
}
</script>
