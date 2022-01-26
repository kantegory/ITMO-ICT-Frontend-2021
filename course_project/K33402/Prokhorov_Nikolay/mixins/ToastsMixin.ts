import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class ToastsMixin extends Vue {
  makeErrorToast() {
    this.$bvToast.toast('Упс! Что-то пошло не так. Попробуйте позже', {
      toaster: 'b-toaster-bottom-right',
      title: 'Ошибка!',
      autoHideDelay: 10000,
      appendToast: true,
      variant: 'warning'
    })
  }
}
