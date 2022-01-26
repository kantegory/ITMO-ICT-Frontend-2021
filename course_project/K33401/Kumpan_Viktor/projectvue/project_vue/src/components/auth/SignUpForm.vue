<template>
  <form @submit.prevent="register">
    <h2>Sign Up</h2>
    <fieldset>
    <div class="form-group required">
      <label class="control-label" >Email:</label>
      <input  v-model="form.email" type="text" id="email" placeholder="Email..."/>
      <p><small class="text-muted">The minimum length of a email is 5 characters.</small></p>
    </div>

    <div class="form-group required">
      <label class="control-label" >Nickname:</label>
      <input v-model="form.username" type="text" id="username" placeholder="Nickname..."/>
            <p><small class="text-muted">The minimum length of a nickname is 5 characters.</small></p>
    </div>
        <div class="form-group required">
          <label class="control-label" >Password:</label>
          <input v-model="form.password" type="password" id="password" placeholder="Password..."/>
          <p><small class="text-muted">The minimum length of a password is 6 characters.</small></p>
        </div>

        <div class="form-group required">
          <label class="control-label" >Repeat password:</label>
          <my-input
              v-model="form.confirm_password"
              type="password"
              id="repeatPassword"
              placeholder="Repeat password..."
          />
        </div>
    </fieldset>
        <p class="text-danger" v-if="!form.password.minLength">Password length is less than 6 characters</p>
        <p
            class="text-danger"
            v-if="isPasswordTheSame"
        >
          Введённые пароли не совпадают
        </p>
    <button variant="primary" type="submit">Registration</button>
        <p class="mt-2">
          <small class="text-muted">
            All fields are checked <span class="text-danger">*</span> required to fill out.
          </small>
        </p>
        <p class="mt-3">Already have an account? <router-link to="/auth/signin">Entrance</router-link></p>
      </form>
</template>
<script>

import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
import authRequest from '@/mixins/authRequest'
import MyInput from "@/components/UI/MyInput";

export default {
  name: "SignUpForm",
  components: {MyInput},
  data () {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        confirm_password: "",
      },
      err: ''
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirm_password: {
        required,
        sameAs: sameAs('password')
      }
    }
    },
  computed: {
    isPasswordTheSame () {
      const form = this.form
      return form.password.required
          && form.confirm_password.required
          && !form.confirm_password.sameAs
    }
  },

  mixins: [ authRequest ],
  methods: {
    async register () {
      try {
        await this.authRequest('api/signup', this.form)
        await this.$router.push('/auth/signin')
      } catch (e) {
        console.error('AN API ERROR', e)
        this.err = e
      }
    },
  },
};

</script>
<style scoped>
.form-group.required .control-label:after {
  content:" *";
  color:red;
}

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  color: #384047;
}

form {
  max-width: 300px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #f4f7f8;
  border-radius: 8px;
}

h2 {
  margin: 0 0 30px 0;
  text-align: center;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}

/*select {*/
/*  padding: 6px;*/
/*  height: 32px;*/
/*  border-radius: 2px;*/
/*}*/

button {
  padding: 19px 39px 18px 39px;
  color: #FFF;
  background-color: #6f44b6;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #542af6;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
  margin-bottom: 10px;
}

fieldset {
  margin-bottom: 30px;
  border: none;
}

legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

@media screen and (min-width: 240px) {

  form {
    max-width: 40%;
  }

}

</style>
