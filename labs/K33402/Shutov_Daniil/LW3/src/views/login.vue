<template>
  <div>
    <Header/>
    <Login/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default {
  name: 'Log',
  components: {
    Login,
    Footer,
    Header
  }
}
</script>
