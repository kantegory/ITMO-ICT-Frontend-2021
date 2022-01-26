<template>
  <b-container class="align-self-center d-flex flex-column align-items-center">
    <h2 class="text-center">CheckSplitter - учет финансов по-новому</h2>
    <b-button v-if="!$auth.loggedIn" :to="{'name': 'LoginView'}" variant="outline-dark" class="mt-3">Вход</b-button>
    <b-button v-else :to="{'name': 'ReceiptsListView'}" variant="outline-dark" class="mt-3">Мои чеки</b-button>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'IndexView',
  auth: false,
})
export default class IndexView extends Vue {
}
</script>
