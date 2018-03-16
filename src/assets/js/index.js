import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';
import Weather from './Weather';
import Coin from './Coin';
import Train from './Train';
import User from './User';

let currentWeatherObj = null;

$(document).ready(function() {

    let weather = new Weather();

    let iota = new Coin('https://api.coinmarketcap.com/v1/ticker/iota/?convert=EUR');
    let bitcoin = new Coin('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR');
    let litecoin = new Coin('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=EUR'); 
    let eth = new Coin('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=EUR');
    let ste = new Coin('https://api.coinmarketcap.com/v1/ticker/stellar/?convert=EUR');
    let teth = new Coin('https://api.coinmarketcap.com/v1/ticker/tether/?convert=EUR');

    let s1 = new Train();

    let clock = new Clock('.clock');
    clock.startTimer();
    
    greeting();
})

function greeting() {
    let today = new Date();
    let h = today.getHours();
    
    if(h >= 12 && h < 13) {
        $('.time-period').html("Guten Mittag");
    } else if(h >= 13 && h < 17) {
        $('.time-period').html("Guten Nachmittag");
    } else if(h >= 17 && h < 23) {
        $('.time-period').html("Guten Abend");
    } else if(h >= 23 && h < 5) {
        $('.time-period').html("Gute Nacht");
    } else {
        $('.time-period').html("Guten Morgen");
    }
}

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