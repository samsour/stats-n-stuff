<template>
  <div class="public-transport">
    <ul v-if="stationBoardData">
      <li v-for="entry in stationBoardData" :key="entry.id">
        <station-board-entry v-bind="entry" />
      </li>
    </ul>
    <ul>
      <li v-for="stop in currentStops" :key="stop.id">
        <button @click="getStationBoard(stop.extId)">{{ stop.name }}</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StationBoardEntry from "../components/StationBoardEntry";

export default {
  name: "public-transport",
  components: {
    StationBoardEntry
  },
  computed: {
    ...mapGetters({
        locationInput: "location",
        currentStops: "RMV/currentStops",
        stationBoardData: "RMV/currentStationBoardData"
    })
  },
  mounted() {
      if (this.locationInput) {
          this.$store.dispatch("RMV/fetchData");
      }
  },
  methods: {
    getStationBoard(stationId) {
      this.$store.dispatch("RMV/fetchStationBoardData", { stationId, type: 'arrival' });
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
