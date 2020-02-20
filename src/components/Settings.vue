<template>
  <div class="settings">
      Hello {{ name }} from {{ location }}
      <!-- <input class="settings__input" type="text" v-model="locationInput" />
      <button @click="refresh" class="settings__button">Refresh</button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "settings",
    computed: {
        ...mapGetters([
            'name',
            'location',
        ])
    },
    methods: {
        refresh() {
            this.$store.dispatch("Weather/fetchData");
            this.$store.dispatch("RMV/fetchData");
        }
    }
};
</script>

<style lang="scss" scoped>
.settings {
    @include neumorphicContainer;
    padding: 50px;
}
</style>