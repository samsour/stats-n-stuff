import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';
import Weather from './Weather';
import Coin from './Coin';
import Train from './Train';
import User from './User';
import Options from './Options';
import Controls from './Controls';


$(document).ready(function() {
    let controls = new Controls();
    controls.watchEvents();
    controls.bindKeyEvents();

    let options = new Options();
    options.saveSettings();
    options.getSettings()

    let user = new User("Dude","Frankfurt");
    let weather = new Weather('frankfurt', 'de');

    // const iota = new Coin('https://api.coinmarketcap.com/v1/ticker/iota/?convert=EUR'); // set coinCounter to 0

    // const s1 = new Train();

    const clock = new Clock('.clock');
    clock.startTimer();
    clock.greet();
})
/*
*
* ToDo's
*
*




// - Coin suggestion @ coinNameInput




// - API helper class!




// - Startseite

function createUser() {
    console.log("Creating user...");
    const user = new User($('#inputUserName').val());
    
    // hide interface, get widgets...
}

// in bindKeyEvents:
$('#userNameInput').keyup(function(event) {
        if (event.keyCode === 13) { //ENTER
            createUser();
        }
    });




// - Dynamic Background Change - DBC

function setBackground() {
    $('body').removeClass();
    switch(data) {
        case data == 100:
            $('body').addClass('sunny');
            break;
        case data == 101:
            $('body').addClass('rainy');
            break;
        case data == 102:
            $('body').addClass('mostly-clouds');
            break;
        default:
            $('body').addClass('neutral');
            break;
    }
}
*/