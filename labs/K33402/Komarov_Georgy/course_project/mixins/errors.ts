import {Component, Vue} from 'nuxt-property-decorator'

@Component({
  name: 'ErrorsMixin',
})
export default class ErrorsMixin extends Vue {
  errors: { [name: string]: string[] } = {}

  getError(key: string) {
    return this.errors?.[key]?.[0] !== undefined ? this.errors?.[key]?.[0] : ''
  }

  getState(key: string) {
    return this.getError(key) === ''
  }
}
