import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Clock from './Clock';

$(document).ready(function() {
    let clock = new Clock('.clock');
    let clock2 = new Clock('.')
    clock.startTimer();
})

