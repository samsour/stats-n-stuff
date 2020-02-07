<template>
  <div class="public-transport">
    <ul>
      <li v-for="stop in currentStops" :key="stop.id">{{ stop.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "public-transport",
  computed: {
    ...mapGetters({
        locationInput: "location",
        currentStops: "RMV/currentStops"
    })
  },
  mounted() {
      if (this.locationInput) {
          this.$store.dispatch("RMV/fetchData");
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.public-transport {
  padding: 20px;

  ul {
    list-style-type: none;
  }
}
</style>
