<template>
  <div class="passreset2">
    <Header />
    <main>
      <div class="container py-4">
        <PassReset2 />
      </div>
    </main>
    <Footer :bottom="BottomFooter" />
    <PassRenewModal />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PassReset2 from '@/components/PassReset2.vue'
import PassRenewModal from '@/components/PassRenewModal.vue'

export default {
  name: 'PassResetView2',
  data: () => ({
    BottomFooter: 'bottom'
  }),

  components: {
    Header,
    Footer,
    PassReset2,
    PassRenewModal
  }
}
</script>
