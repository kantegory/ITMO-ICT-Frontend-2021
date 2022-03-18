<template>
  <div class="favourites">
    <Header />
    <main>
        <div class="container py-4">
            <div class="row">
                <div class="col-12">
                    <h3 class="d-flex align-items-center justify-content-center text-primary">
                        <img src="@/images/cancel.png" width="35" height="35" class="d-inline-block align-text-top me-3">
                        Error
                        <img src="@/images/cancel.png" width="35" height="35" class="d-inline-block align-text-top ms-3">
                    </h3>
                </div>
            </div>
            <div class="row my-4 mx-auto">
                <div class="col-12">
                    <h3 class="text-center text-primary">Unfortunately something went wrong...</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-lg" @click="$router.go(-2)"><span class="m-3">Back</span></button>
                </div>
            </div>
        </div>
    </main>
    <Footer :bottom="BottomFooter" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ErrorView',
  data: () => ({
    BottomFooter: 'bottom'
  }),

  components: {
    Header,
    Footer
  }
}
</script>
