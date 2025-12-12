<template>
  <nav class="navbar">
    <div class="logo" id="navHomeDiv">
      <router-link to="/">Home</router-link>
    </div>

    <div class="logo" id="navContacsDiv">
      <router-link to="/contact">Contacs</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style>
#navContacsDiv{
  margin-right: auto;
  padding-left: 3%;
  border-left: solid 2px;  /* line in the middle of navbar */
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

#navHomeDiv{
  margin-left: auto;
  padding-right: 3%;
}

.navbar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ccc;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  box-sizing: border-box;
  z-index: 100;
  font-size: 24px;
}
</style>
