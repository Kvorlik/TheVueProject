<template>
  <div class="footer">
    <div class="container" align="center">
      <div class="copyrights">
        &#169; 2019, made by dream team for OmSU
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
.footer{
  margin: 30px;
  font-size: 18px;
  color: #3c4858;
  letter-spacing: normal;
}

.container {
  width: 100%;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  overflow: auto;
}

.copyrights{
  width: 500px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
