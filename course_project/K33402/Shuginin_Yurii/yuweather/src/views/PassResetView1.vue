<template>
  <div class="passreset1">
    <Header />
    <main>
      <div class="container py-4">
        <PassReset1 />
      </div>
    </main>
    <Footer :bottom="BottomFooter" />
    <PassResetModal />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PassReset1 from '@/components/PassReset1.vue'
import PassResetModal from '@/components/PassResetModal.vue'

export default {
  name: 'PassResetView1',
  data: () => ({
    BottomFooter: 'bottom'
  }),

  components: {
    Header,
    Footer,
    PassReset1,
    PassResetModal
  }
}
</script>
