<template>
  <div id="app">
    <weather :location="'Frankfurt'" :language="'de'" />
  </div>
</template>

<script>
import Weather from './components/Weather';

export default {
  name: 'app',
  components: {
    Weather
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
