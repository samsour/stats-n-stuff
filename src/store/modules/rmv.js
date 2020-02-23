import api from '@/utils/rmv-api';
import { Capitalize } from '@/utils/helpers';

export default {
    namespaced: true,
    state: {
        locations: {},
        stationBoardData: []
    },
    getters: {
        // get actual stops, not the meta objects
        allCurrentLocations: state => {
            if (state.locations.stops && state.locations.coords) {
                return state.locations.stops.concat(state.locations.coords);
            } else {
                return state.locations.stops || state.locations.coords;
            }
        },
        currentStops: state => state.locations.stops,
        currentCoords: state => state.locations.coords,
        stationBoardData: state => state.stationBoardData
    },
    mutations: {
        SET_PUBLIC_TRANSPORT_LOCATIONS(state, data) {
            state.locations.stops = data.filter(x => x.StopLocation);
            state.locations.coords = data.filter(x => x.CoordLocation);
        },

        SET_CURRENT_STATION_BOARD(state, data) {
            state.stationBoardData = data;
        },
    },
    actions: {
        fetchData({ commit, rootState }) {
            fetch(`${api.proxyurl + api.baseUrl}location.name?accessId=${api.key}&input=${rootState.settings.location.city}&format=json`, {})
                .then(response => response.json())
                .then(data => {
                    data.stopLocationOrCoordLocation ? commit("SET_PUBLIC_TRANSPORT_LOCATIONS", data.stopLocationOrCoordLocation) : console.log("no location data");
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