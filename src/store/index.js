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
        setupCompleted: state => {
            return state.settings['location'].length > 0 && state.settings['name'].length > 0 && state.settings['language'].length > 0
        }
    },
    mutations: {
        SET_LOCATION(state, data) {
            state.settings.location = data;
        }
    }
})