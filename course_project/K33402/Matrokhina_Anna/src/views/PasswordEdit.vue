<template>
  <b-container>
    <b-form-group label="Логин" :state="!(errors.username && errors.username.length !== 0)"
                  :invalid-feedback="errors.username ? errors.username.join(', ') : ''">
      <b-form-input placeholder="Введите логин" v-model="username" required />
    </b-form-group>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      errors: []
    }
  }
}
</script>
