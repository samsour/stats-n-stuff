<template>
  <div class="public-transport">
    <ul v-if="stationBoardData">
      <li v-for="entry in stationBoardData" :key="entry.id">
        <station-board-entry v-bind="entry" />
      </li>
    </ul>
    <ul>
      <li v-for="stop in currentStops" :key="stop.id">
        <button @click="getStationBoard(stop.extId)" class="button">{{ stop.name }}</button>
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

  .button {
    background: #f2f3f7;
    border-radius: 30px;
    border: 0;
    box-shadow:  8px 8px 16px #cecfd2, -8px -8px 16px #ffffff;
    padding: 10px 30px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
      box-shadow: inset 8px 8px 16px #e5e6e9, inset -8px -8px 16px #ffffff;
    }
  }
}
</style>
