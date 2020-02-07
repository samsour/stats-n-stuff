import Vue from "vue";
import Vuex from "vuex";
import Weather from "./modules/weather";
import RMV from "./modules/rmv";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Weather,
        RMV
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