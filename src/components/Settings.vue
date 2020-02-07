<template>
  <div class="settings">
      <input type="text" v-model="locationInput" />
      <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "settings",
    computed: {
        locationInput: {
            get() {
                return this.$store.getters["location"];
            },
            set(locationName) {
                this.$store.commit("SET_LOCATION", locationName);
            }
        }
    },
    methods: {
        refresh() {
            this.$store.dispatch("Weather/fetchData");
            this.$store.dispatch("RMV/fetchData");
        }
    }
};
</script>