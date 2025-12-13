<template>
  <div>
    <h2>Log in</h2>
    <div v-if="error" class="error-block">
      <p class="error-message">{{ error }}</p>
    </div>
    <form class="signup-form">
      <input type="email" placeholder="Email" required v-model="email" />
      <input type="password" v-model="password" placeholder="Password" />
      <div>
        <button id="loginBtn" @click="LogIn" class="userAuthBtn">Login</button>
        <button id="signUPfLoginBtn" class="userAuthBtn" @click='this.$router.push("/signup")'>Signup</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "LogIn",

  data: function () {
    return {
      email: '',
      password: '',
      error: "",
    }
  },
  methods: {


    LogIn() {
      this.error = "";
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          const data = await response.json().catch(() => ({}));
          if (!response.ok) {
            this.error = data.error;
            return;
          }

          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
}

</script>

<style>
#loginBtn {
  width: 40%;

}

#signUPfLoginBtn {
  margin-left: 20%;
  width: 40%;
}
</style>