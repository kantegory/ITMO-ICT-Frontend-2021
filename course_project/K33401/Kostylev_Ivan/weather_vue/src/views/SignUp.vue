<template>
     <div class="bg-image">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-md-10 mx-auto col-lg-7">
            <h1 class="display-4 fw-bold lh-1 mb-1 center">M.Y.Weather</h1>
            <h2 class="display-4 info fs-4 mb-3 center">To use all the features sign up, please</h2>
            <div class="p-4 p-md-5 border rounded-3 bg-light">
                <b-form @submit.stop.prevent="onSubmit" class="needs-validation">
                  <div  class="mb-4">
                    <b-form-group id="input-group-1" label="Nickname" label-for="nickname-input">
                      <b-form-input
                        id="nickname-input"
                        name="nickname-input"
                        v-model="$v.form.nickname.$model"
                        :state="validateState('nickname')"
                        aria-describedby="nickname-input-feedback"
                        placeholder="e.g. ivan.kust59"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="nickname-input-feedback"
                      >This is a required field and must be at least 4 characters.</b-form-invalid-feedback>
                    </b-form-group>
                    </div>
                </b-form>

                <b-form @submit.stop.prevent="onSubmit" class="needs-validation">
                  <div class="mb-4">
                    <b-form-group id="input-group-2" label="E-mail" label-for="email-input">
                      <b-form-input
                        id="email-input"
                        name="email-input"
                        v-model="$v.form.email.$model"
                        :state="validateState('email')"
                        type="email"
                        aria-describedby="email-input-feedback"
                        placeholder="ivan.kust59@example.com"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="email-input-feedback"
                      >Enter the correct, email please.</b-form-invalid-feedback>
                    </b-form-group>
                    </div>
                </b-form>

                <b-form @submit.stop.prevent="onSubmit" class="needs-validation">
                  <div class="mb-4">
                    <b-form-group id="input-group-3" label="Password" label-for="password-input">
                      <b-form-input
                        id="password-input"
                        name="password-input"
                        v-model="$v.form.password.$model"
                        :state="validateState('password')"
                        type="password"
                        aria-describedby="password-input-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="password-input-feedback"
                      >This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
                    </b-form-group>
                    </div>
                </b-form>

                <b-form @submit.stop.prevent="onSubmit" class="needs-validation">
                  <div class="mb-4">
                    <b-form-group id="input-group-3" label="Confirm password" label-for="confirm-password-input">
                      <b-form-input
                        id="confirm-password-input"
                        name="confirm-password-input"
                        v-model="$v.form.confirmPassword.$model"
                        :state="validateState('password')"
                        type="password"
                        aria-describedby="confirm-password-input-feedback"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="confirm-password-input-feedback"
                      >This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
                    </b-form-group>
                    </div>
                </b-form>
              <b-button type="submit" variant="w-100 btn btn-lg btn-primary">Sign up</b-button>
          <hr class="my-4">
          <small class="text-muted">If you already have an account, <router-link :to="{name: 'SignIn'}">sign in</router-link></small>
          </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
// import router from '@/router';

export default {
  name: 'SignUp',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        nickname: null,
        email: null
      }
    }
  },
  validations: {
    form: {
      nickname: {
        required,
        minLength: minLength(4)
      },
      email: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    validateState (name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    resetForm () {
      this.form = {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
        town: null
      }

      this.$nextTick(() => {
        this.$v.$reset()
      })
    },
    onSubmit () {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      alert('Form submitted!')
    }
  }
}
</script>
