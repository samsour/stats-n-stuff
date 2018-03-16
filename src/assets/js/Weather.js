import $ from 'jquery';

export default class Weather {
    constructor() {
        this.getWeather();
    }

    getWeather() {
        // weather api call
        $.ajax({
            url: 'https://api.apixu.com/v1/current.json?key=2c8bf56be4704deeb4b102456181403&q=Frankfurt&lang=de',
            dataType: 'json',
            success: function(data) {
                console.log("Weather JSON: ", data);
    
                $('.weather-icon').html('<img src="' + data.current.condition.icon + '">');
                // $('.weather-status').html(data.current.condition.code);

                let temperature = data.current.temp_c;
                let feelsLike = data.current.feelslike_c;
                let location = data.location.name;
                let conditionText = data.current.condition.text;
                let conditionCode = data.current.condition.code;

                $('.weather-temperature').html(
                    location
                    + ' // ' 
                    + conditionText 
                    + ' // '
                    + temperature 
                    + ' °C '
                    + checkPhrase(temperature, feelsLike) 
                    + ' gefühlte ' + data.current.feelslike_c + '°C'
                );
                
                function checkPhrase(temp1, temp2) {
                    if(temp1 == temp2) {
                        return 'auch';
                    } else {
                        return 'aber';
                    }
                }
            }
        });
    }
}