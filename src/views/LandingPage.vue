<template>

  <div id="logoutDiv">
    <button id="logoutButton" @click="Logout">Logout</button>
  </div>
  <div>
    <PostCard
      v-for="(p, i) in posts"
      :key="i"
      :post="p"
      :index = "i"
    />
    <ResetLikes/>
  </div>
</template>

<script>
import auth from "../auth";
import { mapState } from 'vuex';
import PostCard from '../components/PostCard.vue'
import ResetLikes from '../components/ResetLikes.vue'; 

export default {
  name: 'LandingPage',
  components: {
    PostCard,
    ResetLikes
  },
  computed: {
    ...mapState(['posts'])
  },
  

  // auth 
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
  mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    },
    

}
</script>


<style>
  #logoutDiv{
    display: flex;
  }

  #logoutButton{
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    margin-bottom: 3%;
  }
</style>