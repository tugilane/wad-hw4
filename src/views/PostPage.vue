<template>
  <div>
    <h1>Edit post</h1>

    <textarea v-model="post.body" rows="8"></textarea>

    <br />

    <button @click="save">Save</button>
    <button @click="$router.push('/')">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "PostPage",

  data() {
    return {
      post: {}
    };
  },

  async mounted() {
    const res = await fetch(
      `http://localhost:3000/api/posts/${this.$route.params.id}`,
      { credentials: "include" }
    );

    this.post = await res.json();
  },

  async save() {
    await fetch(
      `http://localhost:3000/api/posts/${this.post.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ body: this.post.body })
      }
    );

    this.$router.push("/");
  }
};
</script>
