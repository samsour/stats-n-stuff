export default class Printer {

    constructor(user) {
        this._user = user;
    }

    writeUserName() {
        $('.username').html(user.name);
    }
}