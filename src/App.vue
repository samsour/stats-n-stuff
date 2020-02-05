<template>
  <div id="app">
    <settings />
    <weather />
  </div>
</template>

<script>
import Settings from './components/Settings';
import Weather from './components/Weather';

export default {
  name: 'app',
  components: {
    Settings,
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
