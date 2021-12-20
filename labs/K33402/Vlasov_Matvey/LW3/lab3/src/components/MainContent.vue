<template>
    <main role="main">
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Find Home for One Night</h1>
                <p>If you are going to travel and looking for a place to stay in, we can help you.
                    There are a lot of houses, flats and rooms available for the rent.
                    You'll easily find the one you like for a low price.
                </p>
                <p><a class="btn btn-primary btn-lg" href="search.html" role="button">Explore &raquo;</a></p>
            </div>
        </div>

        <div class="container pb-3">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src="@/assets/img/outdoor_getaways.jpg" alt="A house with mountains in the background">
                    <figcaption>Outdoor getaways</figcaption>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid" src="@/assets/img/unique_stays.jpg" alt="A house in the middle of water">
                    <figcaption>Unique stays</figcaption>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid" src="@/assets/img/entire_homes.jpg" alt="A two-storey house">
                    <figcaption>Entire homes</figcaption>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
}
</script>

<style>
.jumbotron {
    background-color: var(--background-color-jumbotron) !important;
}

figcaption {
    font-size: 1.5rem;
}
</style>
