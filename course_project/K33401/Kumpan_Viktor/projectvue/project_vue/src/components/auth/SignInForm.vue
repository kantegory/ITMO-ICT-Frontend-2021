<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="username">Login:</label>
      <input v-model="form.username" type="text" id="username" placeholder="Login..."/>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input v-model="form.password" type="password" id="password" placeholder="Password..."/>
    </div>
    <button variant="primary" type="submit">Login</button>
    <p class="mt-3">Not registered yet? <router-link to="/auth/signup">Registered</router-link>
    </p>
  </form>
</template>
<script>
import authRequest from '@/mixins/authRequest'
import Navbar from "@/components/Navbar";
export default {
  name: "SignInForm",
  data () {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {Navbar},
  mixins: [ authRequest ],
  methods: {
    login: async function () {
      try {
        console.log(this.form)
        const response = await this.authRequest('api/token', this.form)
        this.setLogined(response.token)
        await this.$router.push('/news')
      } catch (error) {
        console.error('AN API ERROR:', error)
      }
    },
    setLogined (token) {
      console.log(token);
      localStorage.setItem('token', token);
    }
  }
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
  margin: 20px auto;
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

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}

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
    justify-content: center;
  }

}

</style>