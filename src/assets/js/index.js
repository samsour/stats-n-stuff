import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';
import Weather from './Weather';
import Coins from './Coins';
import Rmv from './Rmv';
import User from './User';

let currentWeatherObj = null;

$(document).ready(function() {

    let clock = new Clock('.clock');
    clock.startTimer();
    
    let weather = new Weather();

    let coins = new Coins();

    let rmv = new Rmv();
})

// function setBackground() {

//     $('body').removeClass();

//     switch(data) {
//         case data == 100:
//             $('body').addClass('sunny');
//             break;
//         case data == 101:
//             $('body').addClass('rainy');
//             break;
//         case data == 102:
//             $('body').addClass('mostly-clouds');
//             break;
//         default:
//             $('body').addClass('neutral');
//             break;
//     }
// }

/*

    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

*/