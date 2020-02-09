<template>
  <div class="settings">
      <input class="settings__input" type="text" v-model="locationInput" />
      <button @click="refresh" class="settings__button">Refresh</button>
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

<style lang="scss" scoped>
.settings {
    &__input {
        display: block;
        margin-bottom: 20px;
    } 
    &__button {
        display: block;
        border: 0;
        background: transparent;
        padding: 10px 30px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 2px;
        color: #5a84a2;
        font-size: 18px;
        outline: 0;
        border-radius: 40px;
        box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7);
        // box-shadow: -2px -2px 8px rgba(255,255,255,1),
        //             -2px -2px 12px rgba(255,255,255,0.5),
        //             inset 2px 2px 4px rgba(255,255,255,0.1),
        //             2px 2px 8px rgba(0,0,0,0.15);
        transition: all 150ms ease-out;
        cursor: pointer;

        &:hover {
            box-shadow: inset -2px -2px 8px rgba(255,255,255,1),
                        inset -2px -2px 12px rgba(255,255,255,0.5),
                        inset 2px 2px 4px rgba(255,255,255,0.1),
                        inset 2px 2px 8px rgba(0,0,0,0.15);
        }
    }
}
</style>