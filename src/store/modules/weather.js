import api from "@/utils/weather-api";

export default {
    namespaced: true,
    state: {
        locationData: {},
        weatherData: {}
    },
    getters: {
        locationName: state => state.locationData ? state.locationData.name : 'anywhere',
        temperature: state => state.weatherData ? state.weatherData.temperature : 0,
        feelslike: state => state.weatherData ? state.weatherData.feelslike : 0
    },
    mutations: {
        SET_LOCATION_DATA(state, data) {
            state.locationData = data;
        },
        SET_WEATHER_DATA(state, data) {
            state.weatherData = data;
        }
    },
    actions: {
        fetchData({ commit, rootState }) {
            fetch(`${api.baseUrl}/current?access_key=${api.key}&query=${rootState.settings.coordinates.latitude},${rootState.settings.coordinates.longitude}`)
                .then(response => response.json())
                .then(data => {
                    data.location ? commit("SET_LOCATION_DATA", data.location) : console.log("no location");
                    data.current ? commit("SET_WEATHER_DATA", data.current) : console.log("no current weather");
                })
        }
    }
};
