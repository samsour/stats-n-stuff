import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';
import User from './User';

let currentWeatherObj = null;

$(document).ready(function() {

    let clock = new Clock('.clock');
    clock.startTimer();

    // weather api call
    $.ajax({
        url: 'https://api.apixu.com/v1/current.json?key=2c8bf56be4704deeb4b102456181403&q=Frankfurt&lang=de',
        dataType: 'json',
        success: function(data) {
            console.log(data);

            $('.weather-icon').html('<img src="' + data.current.condition.icon + '">');
            // $('.weather-status').html(data.current.condition.text);
            let currentTemp = data.current.temp_c;
            let currentFeelslike = data.current.feelslike_c;
            $('.weather-temperature').html(
                'In '
                + data.location.name
                + ' ist es ' 
                + data.current.condition.text 
                + ' mit ' + data.current.temp_c 
                + '°C. Es fühlt sich ' 
                + checkPhrase(currentTemp, currentFeelslike) 
                + ' an wie ' + data.current.feelslike_c + '°C'
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

    // rmv api call
    $.ajax({
        url: 'https://www.rmv.de/hapi/location.name?accessId=a0d5a70b-d413-4863-a0b9-67ddfef252d6&input=frankfurt%20hauptbahnhof',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    })
})

/*

    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

*/