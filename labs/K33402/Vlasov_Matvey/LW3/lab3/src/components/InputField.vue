<template>
    <div class="input-field"> <span class="fa"><b-icon :icon="icon"></b-icon></span>
        <input size="25rem" :type="type" :placeholder="placeholder" required />
    </div>
</template>

<script>
export default {
    name: 'InputField',

    props: {
        type: String,
        placeholder: String,
        icon: String
    }
}
</script>

<style scoped>
::placeholder, input {
    color: var(--color-placeholder);
    background-color: var(--background-color-input);
    text-indent: 0.3rem;
}

.fa {
    font-size: 1.5rem;
    padding-right: 1rem;
    width: 1rem;
}
</style>
