<template>
  <div class="header">
    <div class="menu">
      <div class="nav1">The Project</div>
      <div class="rightblock">
        <div class="nav2">About us</div>
        <div class="nav3">Login // Register</div>
      </div>
    </div>

    <div class="container" align="center">
    <div class="titles">
      <span class="headertitle">Title of the project</span><br>
      <span class="headersubtitle">Subtitle of the project</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 900px;
  background-image: url("../assets/temp-background.jpg");
  background-size: cover;
  background-position-y: 100%;
}

.menu{
  overflow: hidden;
  width: 100%;
  padding-top: 50px;
  font-size: 18px;
  color: white;
  letter-spacing: normal;
}

.nav1, .nav2, .nav3 {
  display: inline-block;
  white-space:nowrap
}

.nav1 {
  position: absolute;
  left: 10%;
}

.nav2 {
  margin-right: 50px;
}

.rightblock {
  overflow: hidden;
  position: absolute;
  right: 10%;
  display: inline-block;
  white-space:nowrap
}

.container {
  width: 100%;
  height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  color: white;
  letter-spacing: normal;
  text-shadow:
  0 15px 102.86px rgba(0,0,0,.7),
  0 15px 40.02px rgba(0,0,0,.21);
}

.titles {
  width: 900px;
  height: 200px;
  position: absolute;
  top: -100px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.headertitle {
  font-weight: bold;
  font-size: 100px;
}

.headersubtitle {
  font-size: 40px;
}

</style>
