<template>
   <div class="bg-image">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-md-10 mx-auto col-lg-5">

        <div class="text">
          <h1 class="display-4 fw-bold lh-1 mb-1 center">M.Y.Weather</h1>
          <h2 class="display-4 fs-4 mb-3">Weather in your browser</h2>
          </div>

            <div class="p-4 p-md-5 border rounded-3 bg-light">
              <div class="form-floating mb-4">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">E-mail</label>
              </div>
              <div class="form-floating mb-4">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"> Remember me
                </label>
              </div>
              <form>
                <router-link :to="{name: 'Weather'}">
                  <button class="w-100 btn btn-lg btn-primary" type='submit'>Log in</button>
                </router-link>
              </form>
              <hr class="my-4">
              <small class="text-muted">If you don't have an account, <router-link to="/signup">register</router-link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'SignIn',

  methods: {
    onSubmit (form) {
      router.push('/weather')
    }
  }
}

</script>

<style>
.bg-image {
    background: url('../assets/sky-background.jpg') no-repeat center center fixed;
    background-size: cover;
    min-height:100vh;
}
</style>
