<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$color-primary: #282B35;
$color-secondary: #f5f5f5;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-primary;
  background-color: $color-secondary;

  @media (prefers-color-scheme: dark) {
    color: $color-secondary;
    background-color: $color-primary;
  }
}

.app {
  text-align: center;
  margin-top: 60px;
}
</style>
