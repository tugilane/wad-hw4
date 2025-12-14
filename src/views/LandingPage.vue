<template>
  <div class="topButtons">
    <button @click="Logout" class="homePageButton">Logout</button>
  </div>

  <div>
    <div
      v-for="p in posts"
      :key="p.id"
      class="click-post"
      @click="goToPost(p.id)"
    >
      <PostCard :post="p" />
    </div>
  </div>

  <div class="bottomButtons">
    <button @click="$router.push('/posts/new')" class="homePageButton">
      Add post
    </button>

    <button @click="deleteAll" class="homePageButton">
      Delete all
    </button>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  name: "LandingPage",
  components: { PostCard },

  data() {
    return {
      posts: []
    };
  },

  methods: {
    loadPosts() {
      fetch("http://localhost:3000/api/posts", {
        credentials: "include"
      })
        .then((res) => res.json())
        .then((data) => {
          this.posts = data;
        })
        .catch((err) => {
          console.log("error loading posts", err);
        });
    },

    goToPost(id) {
      this.$router.push(`/posts/${id}`);
    },

    deleteAll() {
      fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
        credentials: "include"
      })
        .then(() => this.loadPosts())
        .catch((err) => {
          console.log("error deleting all posts", err);
        });
    },

    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: "include"
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    }
  },

  mounted() {
    this.loadPosts();
  }
};
</script>

<style>
.topButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.homePageButton {
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.2s;
}

.homePageButton:hover {
  background-color: #9b9b9b;
}

.click-post {
  cursor: pointer;
}

.bottomButtons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>