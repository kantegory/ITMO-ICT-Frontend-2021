<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a  href="/">
                        <img src="../../public/flying_stuff/logo.png" class="logo" width="90px" height="70px" >
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <a class="nav-item nav-link" href="/">Home</a>
                        <a class="nav-item nav-link" href="/Login">Login</a>
                        <a class="nav-item nav-link" href="/Register">Register</a>
                        <a class="nav-item nav-link" href="/TicketWall">Ticket Wall</a>
                        <a class="nav-item nav-link" href="/OurTeam">Our Team</a>
                        <a class="nav-item nav-link" href="/AboutUs">About Us</a>
                        <a class="nav-item nav-link" href="/ContactUs">Contact Us</a>
                        <a class="nav-item nav-link" href="/PartnersSection">Our Partners</a>
                        <a class="nav-item nav-link" href="/Buy">Buy</a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
