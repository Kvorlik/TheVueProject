<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #eeeeee;
}

* {
  /* font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: normal;
  letter-spacing: normal; */
  font-family: 'Raleway', 'RalewayOffline', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
}

a {
  text-decoration: none;
  outline: 0;
  color: white;
}
</style>
