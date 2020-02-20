<template>
  <div class="settings">
      Hello {{ name }} from {{ location }}
      <!-- <input class="settings__input" type="text" v-model="locationInput" />
      <button @click="refresh" class="settings__button">Refresh</button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "settings",
    computed: {
        ...mapGetters([
            'name',
            'location',
        ])
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
    @include neumorphicContainer;
    background-color: #f2f3f7;
    padding: 50px;

    &__input {
        display: block;
        margin-bottom: 20px;
        background: transparent;
        border: 0;

        &::after {
            content: "";
            display: block;
            background-color: currentColor;
            width: 100%;
            height: 10px;
        }
    } 
    &__button {
        @include neumorphicContainer;
    }
}
</style>