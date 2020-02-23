<template>
  <div class="public-transport">
    <ul v-if="stationBoardData" class="public-transport__list">
      <li v-for="entry in stationBoardData" :key="entry.id">
        <station-board-entry v-bind="entry" />
      </li>
    </ul>

    <div v-if="currentStops && currentStops.length > 0" class="public-transport__stations">
      <h2 class="public-transport__headline">Stations:</h2>
      <ul class="public-transport__list">
        <li v-for="stop in currentStops" :key="stop.id">
          <button @click="getStationBoard(stop.extId)" class="public-transport__button">{{ stop.name }}</button>
        </li>
      </ul>
    </div>

    <div v-if="currentCoords && currentCoords.length > 0" class="public-transport__places">
      <h2 class="public-transport__headline">More places nearby:</h2>
      <ul class="public-transport__list">
        <li v-for="coordinate in currentCoords" :key="coordinate.id">
          <button class="public-transport__button">{{ coordinate.name }}</button>
        </li>
      </ul>
    </div>
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
        location: "location",
        currentStops: "RMV/currentStops",
        currentCoords: "RMV/currentCoords",
        stationBoardData: "RMV/stationBoardData"
    })
  },
  mounted() {
      if (this.location.city) {
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

  &__headline {
    margin-bottom: 20px;
  }

  &__button {
    @include neumorphicContainer;
  }
}
</style>
