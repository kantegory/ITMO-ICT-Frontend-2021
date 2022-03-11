<template>
<div class="without">
  <Header/>
  <Answer/>
  <Footer/>
</div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Answer from '../components/Answer'
export default {
  name: 'AnswerPage',
  components: {
    Answer,
    Footer,
    Header
  }
}
</script>
