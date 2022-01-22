<template>
    <div class="card p-3">
        <b-row>
            <div class="ml-2 align-self-center grade">
                {{ reviewItem.grade }}
            </div>
            <div class="py-1 col-md-11 card-body">
                <p class="card-text">{{ reviewItem.comment }}</p>
                <p class="card-author">
                    Reviewed by <b>{{ reviewItem.booking.tenant.user.username }}</b> on {{ reviewItem.last_changed.slice(0, 10) }}
                </p>
            </div>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'ReviewCard',

    props: {
        reviewItem: Object
    }
}
</script>

<style scoped>
.card {
    background-color: var(--background-color-card);
}

.card-body p {
    line-height: 0.8rem;
}

p.card-text {
    line-height: 1.0rem;
}

.card-author {
    color: gray;
}

.fa {
    padding-right: 1.5rem;
    font-size: 1.5rem;
    width: 1rem;
}

.grade {
    font-size: 2rem;
}
</style>
