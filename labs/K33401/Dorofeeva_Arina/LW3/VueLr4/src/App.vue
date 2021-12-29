<template>
    <router-view/>
</template>

<script>
</script>
<style lang="scss">

@mixin full_size {
    width: 100%;
    height: 100%;
}

%paragraph {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: normal;
}

%paragraph_error {
    color: #FD8D93;
}

%paragraph_black {
    color: black;
}

%paragraph_white {
    color: white;
}

header {
    width: 100%;
}

body, html {
    @include full_size;
    background-color: var(--back-color);
    color: var(--outline-text-color);
}

.bg-custom {
    background-color: var(--back-color);
}


.navbar li a:hover {
    color: var(--outline-text-color) !important;
}

.navbar-brand {
    .img, .assets {
        width: 100px;
        height: 50px;
        background: url("assets/logo.png") no-repeat center center;
        background-size: contain;
    }
}


.navbar-nav li {
    padding-right: 50px;
}

.nav-link {
    font-size: 1.1em !important;
}

.carousel-size {
    height: 500px;
    width: 100%;
}

.carousel-item-size, .carousel-inner assets {
    @include full_size;
}

.slide1 {
    background: url("assets/slider1.jpg") top center no-repeat;
}

.slide2 {
    background: url("assets/slider2.jpg") top center no-repeat;
}

.slide3 {
    background: url("assets/slider3.jpg") top center no-repeat;
}

.slide1, .slide2, .slide3 {
    @include full_size;
    background-size: cover;
}

@media (min-width: 1100px) {
    .carousel-inner assets {
        width: 100%;
    }
}

.carousel-caption {
    position: absolute;
    top: 50%;
    transform: translateY(-80%);
}

@media (max-width: 450px) {
    .display-2 {
        font-size: 3em;
    }
}

.jumbotron {
    padding: 1em;
    border-radius: 0;
    width: 70%;
    margin: 20px auto 0;
    color: var(--outline-text-color);
    background-color: var(--back-back-color);
}

.padding {
    padding-bottom: 2em;
}

.alert {
    width: 75%;
    margin: 0 auto;
    padding-top: 2em;
}

.input-group-addon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
}

.alert hr {
    border-top: 2px solid lightgray;
    width: 95%;
    margin-top: 0.3em;
    margin-bottom: 1em;
}

.mexicanum, .tigrinum, .andersoni {
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    background-size: contain;
}

#fixed {
    height: 400px;
    background-blend-mode: multiply;
    background: url("assets/bg.jpg") fixed repeat;
}

#gifsBtn {
    margin-bottom: 20px;
    width: 200px;
}

#gifs assets {
    width: 500px;
    max-width: 100%;
    margin-bottom: 20px;
}

@media (max-width: 750px) {
    .display-4 {
        font-size: 1.5em;
    }
}

#outline-text {
    padding: 20px 20px 20px;
    color: var(--outline-text-color);
    background-color: var(--back-color);
}

.social a {
    font-size: 3em;
    padding: 20px;
}

.fa-telegram {
    color: cornflowerblue;
}

.fa-instagram {
    color: deeppink;
}

.fa-vk {
    color: cornflowerblue;
}

.fa-github {
    color: var(--github-color);
}

.fa-telegram:hover, .fa-instagram:hover, .fa-vk:hover, .fa-github:hover {
    color: silver;
}

footer {
    background-color: var(--footer-back-color);
    padding-top: 50px;
    color: var(--text-color);
}

/* регистрация и авторизация */

#signIn, #register {
    background: url("assets/bg.jpg");
    font-size: 1em;
    color: white;
    height: 100vh;
}

#authorizationForm, #registrationForm {
    background-color: rgba(0, 0, 0, 0.8);
    width: fit-content;

    display: grid;
    grid-auto-rows: max-content;
}

#authorizationForm {
    height: max-content;
}

#registrationForm {
    height: max-content;
}

@media (min-width: 500px) {
    .form-group {
        width: 500px;
    }
}

@media (max-width: 450px) {
    .display-3 {
        font-size: 1em;
    }
}

.custom-control-input:checked ~ .custom-control-label::before {
    border-color: #FD8D93 !important;
    background-color: #FD8D93 !important;
}

.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
    border-color: #FD8D93 !important;
}

.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
    background-color: #E9ECEF !important;
    border-color: #E9ECEF !important;
}

#signInBtn, #registerBtn {
    float: right;
    outline-color: #FD8D93;
    justify-self: end;
}

.custom-checkbox, .form-group {
    color: #FEDFDA;
}

.fa-eye-slash {
    color: #FD8D93;
}

/* личный кабинет */

#youAxolotl {
    height: 200px;
    background: url("assets/you axolotl.jpg") repeat;
}

#assetsBg {
    background-blend-mode: multiply;
    background: url("assets/bg.jpg") fixed repeat;
    min-height: 60%;
}

.cards {
    color: var(--outline-text-color);
    background-color: var(--back-back-color);
}

:root {
    --back-color: white;
    --back-back-color: #E9ECEF;
    --outline-text-color: black;
    --text-color: black;
    --github-color: black;
    --grey: gray;
}

:root {
    --back-color: #1E272E;
    --back-back-color: black;
    --outline-text-color: white;
    --footer-back-color: black;
    --text-color: white;
    --github-color: white;
    --gray: lightgray;
    --link-actibe: #FD8D93;
}


.sign {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 5px;
    width: max-content;
    margin: auto;

}

#gifs img {
    width: 500px;
    max-width: 100%;
    margin-bottom: 20px;
}


.userInfo {
    padding: 50px;
    display: grid;
    grid-auto-rows: max-content;
    grid-template-columns: max-content;
    justify-content: center;
    grid-gap: 8px;
}

.userFields {
    display: grid;
    grid-template-columns: 100px 1fr;
}

.userField {
    padding: 5px;
}

.authError {
    display: grid;
    grid-auto-rows: max-content;
    max-width: 100%;
    height: max-content;
}

.authError__list {
    display: grid;
    grid-auto-rows: 20px;
    max-width: 100%;
}

.authError__error {
    @extend %paragraph;
    @extend %paragraph_error;

}

.tag {
    text-decoration: none;
    color: white;
    text-align: center;
}

.videoAction {
    display: grid;
}

.videoContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
}

.video {
    height: 100%;
    width: 100%;
}

.tagContent {
    position: relative;
}

.tagContainer {
    position: absolute;
    margin: 3rem;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: grid;
    grid-template-rows: max-content max-content;
    grid-gap: 20px;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
}

@media screen and (max-width: 800px) {
    .tagContainer {
        margin: 1rem;
        padding: 10px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .tag {
        font-size: 12px;
    }
}

@media screen and (max-width: 540px) {
    .tagContainer {
        margin: unset;
        padding: 10px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        grid-gap: 5px;
    }


}

.axolotls {
    display: flex;
    flex-wrap: wrap;
}

.axolotl {
    height: 200px;
    width: 200px;
    object-fit: cover;
}

.axolotlPhoto__container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.axolotlPhoto {
    height: 80%;
    width: 80%;
    object-fit: cover;
}


.errorContainer {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


.error {
    @include full_size;
}

.errorImg {
    @include full_size;
    object-fit: cover;
}

.nav-link {
    color: var(--gray) !important;
}

.navbar-light .navbar-nav .active > .link__active {
    color: var(--link-actibe) !important;
}

</style>
