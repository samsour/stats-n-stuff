import babelpolyfill from 'babel-polyfill';
import Limousine from './Limousine';
import Clock from './Clock';
import $ from 'jquery';

$( document ).ready(function() {
    console.log( "ready!" );
})

class Car {
    constructor() {
        console.log("NEW CAR! YEAH!");
    }
}


const car = new Car();
const limo = new Limousine();

