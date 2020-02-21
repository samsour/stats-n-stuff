import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import Weather from "./modules/weather";
import RMV from "./modules/rmv";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: "stats-n-stuff",
    storage: localStorage,
    reducer: state => ({
      // only sync following properties/modules
      settings: state.settings
    })
  });

export default new Vuex.Store({
    modules: {
        Weather,
        RMV
    },
    state: {
        settings: {
            name: '',
            location: '',
            language: 'en'
        },
        lastRouteBeforeSetup: ""
    },
    getters: {
        location: state => state.settings.location,
        name: state => state.settings.name,
    
        missingSettings: state => {
            return Object.keys(state.settings).filter(setting => state.settings[setting].length === 0); 
        }
    },
    mutations: {
        SET_LOCATION(state, data) {
            state.settings.location = data;
        },
        SET_NAME(state, name) {
            state.settings.name = name;
        },
        SAVE_CURRENT_ROUTE(state, slug) {
            state.lastRouteBeforeSetup = slug;
        }
    },
    plugins: [vuexPersist.plugin]
})