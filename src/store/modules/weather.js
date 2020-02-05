import api from "@/utils/api";

export default {
    namespaced: true,
    state: {
        location: "Frankfurt",
        locationData: {},
        weatherData: {}
    },
    getters: {
        location: state => state.location,
        temperature: state => state.weatherData.temperature | '?',
        feelslike: state => state.weatherData.feelslike | '?',
    },
    mutations: {
        SET_LOCATION(state, data) {
            state.location = data;
        },
        SET_LOCATION_DATA(state, data) {
            state.locationData = data;
        },
        SET_WEATHER_DATA(state, data) {
            state.weatherData = data;
        }
    },
    actions: {
        fetchData({ commit, state }) {
            fetch(`${api.baseUrl}/current?access_key=${api.accessToken}&query=${state.location}`)
                .then(response => response.json())
                .then(data => {
                    data.location ? commit("SET_LOCATION_DATA", data.location) : console.log("no location");
                    data.current ? commit("SET_WEATHER_DATA", data.current) : console.log("no current weather");
                })
        }
    }
};
