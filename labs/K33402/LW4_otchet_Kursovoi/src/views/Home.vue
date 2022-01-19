<template>
  <section class="d-flex vh-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">
            <img src="Logo-light.svg" class="logo-svg" />
          </h3>

          <nav class="nav nav-masthead justify-content-center float-md-end">
            <router-link to="/" class="nav-link active">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
          </nav>
        </div>
      </header>

      <main class="px-3">
        <h1>A <span style="font-family: 'Lobster', cursive">Stay.</span> you'd be hard to say</h1>
        <p class="lead">
          Hotels here have a high, stylish standard and are perfect for a quiet
          couple's holiday or family city retreat
        </p>
        <p class="lead">
          <router-link
            to="/booking"
            class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >Get Started</router-link
          >
        </p>
      </main>

      <footer class="mt-auto text-white">
        <p style="font-family: 'Pacifico', cursive">from Lan Anh with ❤️</p>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-svg {
  fill: white;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

section {
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}

.cover-container {
  max-width: 42em;
}

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>
