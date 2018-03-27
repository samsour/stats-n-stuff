export default class Options {

    constructor() {
        this.settings = {};
    }

    getSettings() {
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }

    saveSettings() {
    // Save current settings to local storage
    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));
    }
}