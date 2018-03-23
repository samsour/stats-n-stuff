import $ from 'jquery';

export default class User {
    
    constructor(username, location) {
        this._name = username;
        this._location = location;
    }

    changeLocation(location) {
        this._location = location;
    }
}