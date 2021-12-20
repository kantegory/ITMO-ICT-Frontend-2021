<template>
    <footer>
        <div class="container pt-3">
            <div class="float-right ml-4">
                <a href="https://mail.google.com/mail">
                    <b-icon icon="google" class="fa fa-google"></b-icon>
                </a>
                <a href="https://facebook.com">
                    <b-icon icon="facebook" class="fa"></b-icon>
                </a>
                <a href="https://twitter.com">
                    <b-icon icon="twitter" class="fa"></b-icon>
                </a>
                <a href="https://instagram.com">
                    <b-icon icon="instagram" class="fa fa-instagram"></b-icon>
                </a>
            </div>
            <p class="mb-0 pb-3">&copy; Home4Night Company 2017-2021</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--background-color-navbar) !important;
}

.fa {
    padding-right: 2rem;
    width: 1rem;
}

.fa-google {
    color: red;
}

.fa-instagram {
    color: violet;
}

a {
    display: inline-block;
    white-space: pre;
}
</style>
