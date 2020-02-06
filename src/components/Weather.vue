<template>
  <div class="weather">
    {{ temperature }} in {{ locationName }}, but feels like {{ feelslike }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "weather",
  computed: {
    ...mapGetters({
        locationInput: "location",
        locationName: "weather/locationName",
        temperature: "weather/temperature",
        feelslike: "weather/feelslike"
    })
  },
  mounted() {
      if (this.locationInput) {
          this.$store.dispatch("weather/fetchData");
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
