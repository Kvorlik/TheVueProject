<template>
  <div class="footer">
    <div class="container">
      <div>
        &#169; 2019, made by dream team for OmSU
      </div>

      <div class="links">
        <div class="git">
          <a href="https://github.com/Kvorlik/vue-omsu" target="_blank"><img src="../assets/github_logo.png"/></a>
        </div>

        <div class="vue">
          <a href="https://vuejs.org" target="_blank"><img src="../assets/vue_logo.png"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { }
</script>

<style scoped>
.footer{
  margin: 10px 30px 10px;
  font-size: 18px;
  color: #3c4858;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links {
  display: flex;
  align-items: center;
}

.links img {
  width: 32px;
  margin: 10px 10px 0;
}
</style>
