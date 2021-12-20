<template>
    <div class="login-form d-flex justify-content-center">
        <form>
            <div class="input-field"> <span class="fa"><b-icon icon="envelope-fill"></b-icon></span>
                <input size="25rem" type="email" name="email" placeholder="Email" required />
            </div>
            <div class="input-field"> <span class="fa"><b-icon icon="lock-fill"></b-icon></span>
                <input size="25rem" type="password" name="password" placeholder="Password" required />
            </div>
            <div class="row mt-3 d-flex justify-content-center">
                <input class="btn btn-primary mb-3" type="submit" value="Log in" />
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

::placeholder, input[type='email'], input[type='password'] {
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
