import api from "@/utils/rmv-api";

export default {
    namespaced: true,
    state: {
        locationData: [],
    },
    getters: {
        currentStops: state => state.locationData
    },
    mutations: {
        SET_LOCATION_DATA(state, data) {
            state.locationData = data.map(x => x.StopLocation)
        },
    },
    actions: {
        fetchData({ commit, rootState }) {
            fetch(`${api.baseUrl}location.name?accessId=${api.key}&input=${rootState.settings.location}&format=json`, {
            })
                .then(response => response.json())
                .then(data => {
                    console.log("RMV:", data);
                    data.stopLocationOrCoordLocation ? commit("SET_LOCATION_DATA", data.stopLocationOrCoordLocation) : console.log("no location data");
                })
        }
    }
};
