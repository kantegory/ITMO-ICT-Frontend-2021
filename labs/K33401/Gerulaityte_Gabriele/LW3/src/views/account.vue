<template>
<div>
  <navigationPanel />
    <h3 class="font-weight-medium text-center teal--text pt-4">Корзина товаров</h3>
    <cards />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import navigationPanel from '../components/navigationPanel'
import cards from '../components/cards'

export default {
  name: 'account',

  components: {
    Footer,
    navigationPanel,
    cards
  }
}
</script>
