import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import Weather from "./modules/weather";
import RMV from "./modules/rmv";

import OpenCageApi from "@/utils/openCage-api";

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
            language: 'en',
            coordinates: {}
        },
        lastRouteBeforeSetup: ""
    },
    getters: {
        location: state => state.settings.location,
        name: state => state.settings.name,
        mapCoordinates: state => ({ lat: state.settings.coordinates.latitude, long: state.settings.coordinates.latitude }),
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
        },
        SET_COORDINATES(state, coords) {
            state.settings.coordinates = coords;
        }
    },
    actions: {
        findLocationByCoordinates({ commit }, coordinates) {
            commit("SET_COORDINATES", coordinates);
            fetch(`${OpenCageApi.baseUrl}?q=${coordinates.latitude}+${coordinates.longitude}&key=${OpenCageApi.key}&language=native`)
            .then(response => response.json())
            .then(data => {
                // example response
                //
                // ISO_3166-1_alpha-2, // "DE"
                // ISO_3166-1_alpha-3, // "DEU"
                // _category,          // "transportation"
                // _type,              // "cycleway"
                // building,           // "Unielektro"
                // city,               // "Offenbach am Main"
                // continent,          // "Europe"
                // country,            // "Deutschland"
                // country_code,       // "de"
                // county,             // "Offenbach am Main"
                // cycleway,           // "Grünring"
                // political_union,    // "European Union"
                // postcode,           // "63071"
                // state,              // "Hessen"
                // state_code,         // "HE"
                // suburb              // "Buchhügel"
                const picked = (({
                    building,
                    city,
                    continent,
                    country,
                    country_code,
                    postcode,
                    state,
                    suburb
                }) => ({
                    building,
                    city,
                    continent,
                    country,
                    country_code,
                    postcode,
                    state,
                    suburb
                }))(data.results[0].components);

                commit("SET_LOCATION", picked);
            })
        },
        findLocationByName({ commit }, name) {
        }
    },
    plugins: [vuexPersist.plugin]
})