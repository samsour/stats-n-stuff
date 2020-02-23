<template>
  <div class="weather">
    {{ temperature }}°C in {{ locationName }}<span v-if="feelslike !== temperature">, but feels like {{ feelslike }}°C</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "weather",
  computed: {
    ...mapGetters({
        location: "location",
        locationName: "Weather/locationName",
        temperature: "Weather/temperature",
        feelslike: "Weather/feelslike"
    })
  },
  mounted() {
      if (this.location.city) {
          this.$store.dispatch("Weather/fetchData");
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather {
  padding: 20px;
}
</style>
