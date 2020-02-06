import Vue from "vue";
import Vuex from "vuex";
import weather from "./modules/weather";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        weather
    },
    state: {
        settings: {
            location: 'Frankfurt',
            name: 'User',
            language: 'en'
        }
    },
    getters: {
        location: state => state.settings.location,
    },
    mutations: {
        SET_LOCATION(state, data) {
            state.settings.location = data;
        }
    }
  })