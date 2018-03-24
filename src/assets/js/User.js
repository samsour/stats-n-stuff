import $ from 'jquery';

export default class User {
    
    constructor(username, location) {
        this._name = username;
        this._location = location;
        this.updateHtml();
    }

    updateHtml() {
        $('.username').html(this._name);
    }
}