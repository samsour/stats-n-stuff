<template>
  <div id="app" class="app">
    <weather />
    <public-transport />
    <settings class="app__settings" />
  </div>
</template>

<script>
import Settings from './components/Settings';
import Weather from './components/Weather';
import PublicTransport from './components/PublicTransport';

export default {
  name: 'app',
  components: {
    Settings,
    Weather,
    PublicTransport
  }
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

  &__settings {
    position: fixed;
    bottom: 50px;
    left: 50px;
  }
}
</style>
