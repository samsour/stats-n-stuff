<template>
  <div class="settings">
      Settings
      <input type="text" v-model="location" />
      <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "settings",
    computed: {
        location: {
            get() {
                return this.$store.getters["weather/location"];
            },
            set(locationName) {
                this.$store.commit("weather/SET_LOCATION", locationName);
            }
        }
    },
    methods: {
        refresh() {
            this.$store.dispatch("weather/fetchData");
        }
    }
};
</script>

<style>
</style>