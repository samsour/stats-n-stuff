<template>
  <div class="home">
    <weather />
    <public-transport />
    <settings class="home__settings" />
  </div>
</template>

<script>
import Settings from '@/components/Settings';
import Weather from '@/components/Weather';
import PublicTransport from '@/components/PublicTransport';

export default {
    name: 'home',
    components: {
        Settings,
        Weather,
        PublicTransport
    }
}
</script>

<style lang="scss">
.home {
    &__settings {
        position: fixed;
        bottom: 50px;
        left: 50px;
    }
}
</style>