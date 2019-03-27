<template>
  <div class="header">
    <div class="menu">
      <div class="nav1"><router-link to="/">The Project</router-link></div>
      <div class="nav-blank"/>
      <div class="nav2"><router-link to="About">About us</router-link></div>
      <div class="nav3"><router-link to="Login">Login</router-link> // <router-link to="Register">Register</router-link></div>
    </div>

    <div class="titles">
      <div class="headertitle">Title of the project</div>
      <div class="headersubtitle">Subtitle of the project</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style scoped>
div::selection {
  background: transparent;
}

.header {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 900px;
  background-image: url("../assets/temp-background.jpg");
  background-size: cover;
  background-position-y: 100%;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 30px;
}

.nav1, .nav2, .nav3 {
  margin: 0 30px 0;
  color: white;
  font-size: 20px;
}

.nav-blank {
  flex-grow: 1;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  color: white;
  text-shadow:
  0 15px 102.86px rgba(0,0,0,.7),
  0 15px 40.02px rgba(0,0,0,.21);
  width: 900px;
}

.headertitle {
  font-weight: bold;
  font-size: 100px;
}

.headersubtitle {
  font-size: 40px;
}

</style>
