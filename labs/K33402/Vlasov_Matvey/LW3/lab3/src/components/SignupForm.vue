<template>
    <div class="registration-form d-flex justify-content-center">
        <form>
            <div class="input-field"> <span class="fa"><b-icon icon="envelope-fill"></b-icon></span>
                <input size="25rem" type="email" name="email" placeholder="Email" required />
            </div>
            <div class="input-field"> <span class="fa"><b-icon icon="lock-fill"></b-icon></span>
                <input size="25rem" type="password" name="password" placeholder="Password" required />
            </div>
            <div class="input-field"> <span class="fa"><b-icon icon="lock-fill"></b-icon></span>
                <input size="25rem" type="password" name="password" placeholder="Re-type Password" required />
            </div>
            <div class="input-field"> <span class="fa"><b-icon icon="person-fill"></b-icon></span>
                <input size="25rem" type="text" name="name" placeholder="First Name" />
            </div>
            <div class="input-field"> <span class="fa"><b-icon icon="person-fill"></b-icon></span>
                <input size="25rem" type="text" name="name" placeholder="Last Name" required />
            </div>
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
            <div class="row mt-3 d-flex justify-content-center">
                <input class="btn btn-primary mb-3" type="submit" value="Register" />
            </div>
        </form>
    </div>
</template>

<style scoped>
.input-field input {
    margin: 0.5rem;
}

.input-field input[type='checkbox'], input[type='radio'] {
    margin-left: 3rem;
}

::placeholder, input[type='email'], input[type='password'], input[type='text'], select {
    color: var(--color-placeholder);
    background-color: var(--background-color-input);
    border-width: 0.8px;
}

.fa {
    font-size: 1.5rem;
    padding-right: 1rem;
    width: 1rem;
}
</style>
