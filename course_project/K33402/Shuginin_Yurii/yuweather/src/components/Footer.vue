<template>
    <footer>
        <div v-if="bottom" class="container border-top border-primary py-3 fixed-bottom">
            <div class="row">
                <div class="col-12 text-center pt-2">
                    <h6 class="text-primary text-uppercase">Yurii Shuginin, 2022</h6>
                </div>
            </div>
        </div>
        <div v-else class="container border-top border-primary py-3">
            <div class="row">
                <div class="col-12 text-center pt-2">
                    <h6 class="text-primary text-uppercase">Yurii Shuginin, 2022</h6>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',

  props: {
    bottom: String
  }
}
</script>

<style>
</style>
