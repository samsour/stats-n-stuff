import api from '@/utils/rmv-api';
import { Capitalize } from '@/utils/helpers';

export default {
    namespaced: true,
    state: {
        locationData: [],
        currentStationBoardData: []
    },
    getters: {
        // get actual stops, not the meta objects
        currentStops: state => state.locationData.length > 0 ? state.locationData.filter(stop => stop.meta !== true) : [],
        currentStationBoardData: state => state.currentStationBoardData
    },
    mutations: {
        SET_LOCATION_DATA(state, data) {
            state.locationData = data.map(x => x.StopLocation)
        },

        SET_CURRENT_STATION_BOARD(state, data) {
            state.currentStationBoardData = data;
        },
    },
    actions: {
        fetchData({ commit, rootState }) {
            fetch(`${api.proxyurl + api.baseUrl}location.name?accessId=${api.key}&input=${rootState.settings.location}&format=json`, {})
                .then(response => response.json())
                .then(data => {
                    data.stopLocationOrCoordLocation ? commit("SET_LOCATION_DATA", data.stopLocationOrCoordLocation) : console.log("no location data");
                })
                .catch(function(error) {
                    console.error('Request failed', error)
                });
        },

        fetchStationBoardData({ commit }, { stationId, type = 'departure' }) {
            if(type === 'departure' || type === 'arrival') {
                fetch(`${api.proxyurl + api.baseUrl + type}Board?format=json&accessId=${api.key}&id=${stationId}`, {})
                .then(response => response.json())
                .then(data => {
                    commit("SET_CURRENT_STATION_BOARD", data[Capitalize(type)]);
                })
                .catch(function(error) {
                    console.error('Request failed', error);
                });
            } else {
                console.error("Accepted types are 'arrival' order 'departure'");
            }
        }
    }
};