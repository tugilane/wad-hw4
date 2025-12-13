<template>
  <div>
    <h2>Create Account</h2>
    <div v-if="error" class="error-block">
      <p class="error-message">{{ error }}</p>
    </div>
    <form class="signup-form">
      <input type="email" placeholder="Email" required v-model="email" />
      <input type="password" v-model="password" placeholder="Password" />

      <button id="signUpBtn" class="userAuthBtn" type="button" @click="SignUp">Sign Up</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: function () {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {

    //auth
    SignUp() {
      this.error = "";
      var data = {
        email: this.email,
        password: this.password,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          const data = await response.json();

          if (!response.ok) {
            this.error = data.error;
            return;
          }

          console.log(data);
          this.$router.push("/");

        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  }
}
</script>

<style>
#signUpBtn {
  width: 40%;
}
</style>