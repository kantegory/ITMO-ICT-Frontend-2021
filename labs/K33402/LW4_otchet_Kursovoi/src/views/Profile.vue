<template>
  <Navbar />

  <div class="container">
    <div class="d-flex flex-row">
      <div class="me-5 text-center">
        <img
          src="user.png"
          alt="mdo"
          width="128"
          height="128"
          class="rounded-circle mb-2"
        />

        <h4>Le Lan (Calcifer) Anh</h4>
      </div>

      <div class="d-flex me-5" style="height: 200px">
        <div class="vr"></div>
      </div>

      <div>
        <h2>
          Hello my name is
          <span style="font-family: 'Pacifico', cursive"
            >Le Lan (Calcifer) Anh
          </span>
          !
        </h2>
        <div class="mb-3">
          <label for="profileEmail" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="profileEmail"
            placeholder="lananhnobi@gmail.com"
            disabled
          />
        </div>

        <div class="mb-3">
          <label for="profileDescription" class="form-label"
            >Profile description</label
          >
          <textarea
            class="form-control"
            id="profileDescription"
            rows="6"
            disabled
          >

    My soul is a garden of words
    Fallen leaves slide through the stories
    My garden is a soul of hurts
    Sudden pains slide through the memories
          </textarea>

          <div class="mt-4 border border-1 p-3">
            <b>Change Password</b>
            <div class="p-3">
              <div class="mb-3">
                <label for="currentPassword" class="form-label"
                  >Current Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="currentPassword"
                />
              </div>
              <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <input type="password" class="form-control" id="newPassword" />
              </div>
              <button type="submit" class="btn btn-dark">
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Profile",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped></style>
