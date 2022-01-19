<template>
    <div class="d-flex justify-content-center">
        <form>
            <input-field type="email" placeholder="Email" icon="envelope-fill" />
            <input-field type="password" placeholder="Password" icon="lock-fill" />

            <b-row class="mt-3 d-flex justify-content-center">
                <input class="btn btn-primary mb-3" type="submit" value="Log in" />
            </b-row>
        </form>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue'

export default {
    name: 'LoginForm',
    components: {
        InputField
    }
}
</script>

<style scoped>
.input-field input {
    margin: 0.5rem;
}

.input-field input[type='checkbox'], input[type='radio'] {
    margin-left: 3rem;
}

::placeholder, input[type='email'], input[type='password'] {
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
