<template>
  <div class="profile">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <main>
      <div class="container py-4">
        <div class="row">
            <div class="col-12">
                <h3 class="d-flex align-items-center justify-content-center text-primary">
                    <img src="@/images/user.png" width="35" height="35" class="d-inline-block align-text-top me-3">
                    Profile
                    <img src="@/images/user.png" width="35" height="35" class="d-inline-block align-text-top ms-3">
                </h3>
            </div>
        </div>
        <ProfileEditForm />
      </div>
    </main>
    <Footer />
    <LogoutModal />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProfileEditForm from '@/components/ProfileEditForm.vue'
import LogoutModal from '@/components/LogoutModal.vue'

export default {
  name: 'ProfileView',
  components: {
    Header,
    Footer,
    ProfileEditForm,
    LogoutModal
  }
}
</script>
