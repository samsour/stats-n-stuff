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
:root { 
  --color-primary: #282B35;
  --color-primary-light-10: #303440;
  --color-primary-dark-10: #20222a;
  --color-secondary: #f2f3f7;
  --color-secondary-light-10: #fefefe;
  --color-secondary-dark-10: #e6e8f0;

  @media (prefers-color-scheme: dark) {
    --color-primary: #f2f3f7;
    --color-primary-light-10: #fefefe;
    --color-primary-dark-10: #e6e8f0;
    --color-secondary: #282B35;
    --color-secondary-light-10: #303440;
    --color-secondary-dark-10: #20222a;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-primary);
  background-color: var(--color-secondary);

}
</style>
