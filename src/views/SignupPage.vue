<template>
    <div>
      <h2>Create Account</h2>
  
      <form class="signup-form">
        <input type="email" placeholder="Email" required v-model="email"/>
        <input type="password" v-model="password" placeholder="Password" />
  
        <button type="button" @click="SignUp">Sign Up</button>
      </form>
    </div>
  </template>

<script>
  export default {
    name: "SignUp",
    data: function() {
    return {
   email: '',
   password: '',
  }
  },
    methods: {
      
      //auth
      SignUp() {
      var data = {
        email: this.email,
        password: this.password
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
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      //location.assign("/");
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

#error-block {
  width:50%; 
  margin-right:auto; 
  margin-left:auto;
  background-color:white;
  border-radius:5%;
  padding:5%;
}

.error-message {
  color: red;
}

.signup-form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.signup-form input {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #aaa;
  font-size: 16px;
}

.signup-form button {
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #333;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

</style>
  