import { Component, Vue } from "nuxt-property-decorator";
import { BvModal } from "bootstrap-vue/src/components/modal";
import { BvToast } from "bootstrap-vue/src/components/toast";

declare module 'vue/types/vue' {
  interface Vue {
    readonly $bvModal: BvModal
    readonly $bvToast: BvToast
  }
}

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
