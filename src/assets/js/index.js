import $ from 'jquery';
import babelpolyfill from 'babel-polyfill';
import Limousine from './Limousine';
import Clock from './Clock';

$(document).ready(function() {
    let clock = new Clock('.clock');
    clock.startTimer();
})

