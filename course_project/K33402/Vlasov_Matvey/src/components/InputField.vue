<template>
    <div class="input-field"> <span class="fa"><b-icon :icon="icon"></b-icon></span>
        <input v-on:input="updateValue($event.target.value)" size="25rem" :type="type" :placeholder="placeholder" required />
    </div>
</template>

<script>
export default {
    name: 'InputField',

    props: {
        type: String,
        placeholder: String,
        icon: String,
        value: String
    },
    methods: {
        updateValue: function (value) {
            this.$emit('input', value)
        }
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
