import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';
import Weather from './Weather';
import Coin from './Coin';
import Train from './Train';
import User from './User';
import Options from './Options';
import Controls from './Controls';
import Printer from './Printer';


$(document).ready(function() {
    
    let user = new User();
    user.getValues();
    console.log(user.name + user.location + user.lang);
    let options = new Options();

    options.getSettings();

    let controls = new Controls(user, options);
    controls.watchEvents();
    controls.bindKeyEvents();

    let weather = new Weather(user);

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