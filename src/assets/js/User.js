import $ from 'jquery';

export default class User {
    
    constructor() {
        this._name = "";
        this._location = "";
        this._lang = "";
        this._coins = [];
    }

    get name() { return this._name }
	set name(username) {
        this._name = username;
        this.updateHtml();
    }

    get location() { return this._location }
	set location(newLocation) { 
        this._location = newLocation;
        this.updateHtml();
    }

    get lang() { return this._lang }
	set lang(newLang) { 
        this._lang = newLang;
        this.updateHtml();
    }
    
    getCoins() {
        return this._coins;
    }
    addCoin(coin) {
        console.log(this._coins);
        this._coins.push(coin);
    }

    getValues() {
        const retrievedObject = localStorage.getItem('config');
        const config = JSON.parse(retrievedObject);

        this._name = config.user.name;
        this._location = config.user.location;
        this._lang = config.user.lang;
        
        this._coins = config.user.coins || []
        
        this.updateHtml();  
    }

    updateHtml() {
        $('.username').html(this._name);
    }
}