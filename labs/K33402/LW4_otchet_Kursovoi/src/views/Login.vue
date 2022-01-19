<template>
  <section class="text-center" id="signin-section">
    <div class="form-signin">
      <form>
        <img
          class="mb-4"
          src="header.icon.svg#bootstrap"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            v-model="auth.email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            v-model="auth.password"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-dark" v-on:click="signIn">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    auth: {
      email: "lananhnobi@gmail.com",
      password: "Lananh2601",
    },
  }),
  methods: {
    signIn(event) {
      event.preventDefault();
      console.log("hello world");
      if (
        this.auth.email !== "lananhnobi@gmail.com" ||
        this.auth.password !== "Lananh2601"
      ) {
        return;
      }

      this.$store.commit("setAuthenticated", { authenticated: true });
      this.$router.push({ name: "Booking" });
    },
  },
};
</script>

<style scoped>
#signin-section {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100vh;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
