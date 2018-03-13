import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';
import User from './User';


$(document).ready(function() {

    let clock = new Clock('.clock');
    clock.startTimer();

})

/*

    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

*/