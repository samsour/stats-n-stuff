<template>
  <div class="weather">
    {{ temperature }} in {{ location }}, but feels like {{ feelslike }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "weather",
  computed: {
    ...mapGetters({
        location: "weather/location",
        temperature: "weather/temperature",
        feelslike: "weather/feelslike"
    })
  },
  mounted() {
      if (this.location) {
          this.$store.dispatch("weather/fetchData");
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
