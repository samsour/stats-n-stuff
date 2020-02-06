<template>
  <div id="app" class="app">
    <settings class="app__settings" />
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
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  &__settings {
    position: absolute;
    bottom: 50px;
    left: 50px;
  }
}
</style>
