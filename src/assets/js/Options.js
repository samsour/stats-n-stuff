import $ from 'jquery';

export default class Options {

    constructor() {
    }

    getSettings() {
        // Retrieve the object from chrome storage
        const retrievedObject = localStorage.getItem('config');
        const config = JSON.parse(retrievedObject);
        console.log('Local Storage JSON: ', config);
        return config;
    }

    saveSettings(user) {
        // Save current settings to local storage
        console.log(user.getCoins());
        var config = {
            "visuals":
            {
                "background": "assets/img/background4.jpg",
                "transparency": "0.5",
                "theme": "default"
            },
        
            "user":
            {
                "name": user.name,
                "location": user.location,
                "lang": user.lang,
                "coins": user.getCoins(),
                "apps": []
            }
        };

        // Put the object into storage
        localStorage.setItem('config', JSON.stringify(config));
        console.log("Save settings: ", config);
    }

    fillInputs() {

    }
}