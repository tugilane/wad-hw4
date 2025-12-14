<template>
  <div>
    <h1>Add a new post</h1>

    <textarea v-model="post.body" rows="8"></textarea>

    <br />

    <button @click="submitPost">Submit Post</button>

    <p v-if="errorMessage" style="color: red;">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AddPostPage",
  data() {
    return {
      body: "",
      errorMessage: null
    };
  },
  methods: {
    async submitPost() {
      if (!this.body.trim()) {
        this.errorMessage = "Post body cannot be empty.";
        return;
      }

      try {
        await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({ body: this.body })
        });

        this.body = "";
        this.$router.push("/");
      } catch (err) {
        this.errorMessage = "Error submitting post. Please try again.";
        console.error(err);
      }
    }
  }
};
</script>
