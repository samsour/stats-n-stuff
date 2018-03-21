import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';
import Weather from './Weather';
import Coin from './Coin';
import Train from './Train';
import User from './User';

//let weather = null;
let coinCounter = 0; // set to 0 if no coin initialized in constructor

$(document).ready(function() {
    watchEvents();
    bindKeyEvents();

    const weather = new Weather('frankfurt', 'de');

    // const iota = new Coin('https://api.coinmarketcap.com/v1/ticker/iota/?convert=EUR'); // set coinCounter to 0

    // const s1 = new Train();

    const clock = new Clock('.clock');
    clock.startTimer();
    
    greeting();
})

// Move to User class (Controls).
function bindKeyEvents() {
    $('#coinNameInput').keyup(function(event) {
        if (event.keyCode === 13) { //ENTER
            addNewCoin();
        }
    });
}

function watchEvents() {
    $('#new-coin-btn').click(function() {
        addNewCoin();
    });
}

function addNewCoin() {
    if($('#coinId').val() != '' ) {
        const newCoin = $('#coinNameInput').val();
        const newCoinObject = new Coin('https://api.coinmarketcap.com/v1/ticker/' + newCoin + '/?convert=EUR');

        if(coinCounter < 6) {    
            coinCounter++;
        } else {
            $('.new-coin').toggle();
            $('.coin-wrapper').append('<div class="error-msg">Maximale Anzahl an Coins erreicht.</div>');
        }
        $('.input-coin-name').val('');
    } else {
        $('.error-msg').remove();
        $('.coin-wrapper').append('<div class="error-msg">Eingabe erforderlich.</div>');
    }
}


// Move to Clock class.
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




// Save current settings to local storage
    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    */