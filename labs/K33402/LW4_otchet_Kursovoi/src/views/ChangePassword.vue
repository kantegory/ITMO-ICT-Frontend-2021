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
        <h1 class="h3 mb-3 fw-normal">Change your password</h1>

        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="currentPass"
            placeholder="****"
          />
          <label for="currentPass">Current Password</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="newPass"
            placeholder="****"
          />
          <label for="newPass">New Password</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="rePass"
            placeholder="****"
          />
          <label for="rePass">Re-type New Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-dark" type="submit">
          Change
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  </section>
</template>

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
