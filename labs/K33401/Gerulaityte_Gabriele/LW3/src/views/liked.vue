<template>
    <div>
      <navigationPanel />
        <h3 class="font-weight-medium text-center teal--text pt-4">Понравившееся вам товары </h3>
        <cards />
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer'
import cards from '../components/cards'
import navigationPanel from '../components/navigationPanel'

export default {
  name: 'liked',

  components: {
    navigationPanel,
    cards,
    Footer
  }
}
</script>
