<template>
    <div class="d-flex justify-content-center">
        <form>
            <input-field type="email" placeholder="Email" icon="envelope-fill" />
            <input-field type="password" placeholder="Password" icon="lock-fill" />
            <input-field type="password" placeholder="Re-type Password" icon="lock-fill" />
            <input-field type="text" placeholder="First Name" icon="person-fill" />
            <input-field type="text" placeholder="Last Name" icon="person-fill" />

            <div class="input-field">
                <input type="radio" name="radiogroup1" id="rd1">
                <label for="rd1">Male</label>
                <input type="radio" name="radiogroup1" id="rd2">
                <label for="rd2">Female</label>
            </div>
            <div class="input-field">
                <input type="checkbox" id="cb2">
                <label for="cb2">I am older than 18 years of age</label>
            </div>
            <div class="input-field">
                <input type="checkbox" id="cb1">
                <label for="cb1">I agree with <a href="#">terms and conditions</a></label>
            </div>

            <b-row class="mt-3 d-flex justify-content-center">
                <input class="btn btn-primary mb-3" type="submit" value="Register" />
            </b-row>
        </form>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue'

export default {
    name: 'SignupForm',
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

::placeholder, select {
    color: var(--color-placeholder);
    background-color: var(--background-color-input);
    text-indent: 0.3rem;
}
</style>
