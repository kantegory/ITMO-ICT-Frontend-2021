<template>
    <div>
        <navigationPanel />
        <h3 class="font-weight-medium text-center teal--text pa-4">Ваш почтовый адрес </h3>
        <adressForm />
        <div class="ma-3 pa-3"></div>
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer'
import navigationPanel from '../components/navigationPanel'
import adressForm from '../components/adressForm'

export default {
  name: 'adress',
  components: {
    Footer,
    navigationPanel,
    adressForm
  }
}
</script>
