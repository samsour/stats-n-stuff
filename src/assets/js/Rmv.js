import $ from 'jquery';

export default class Rmv {
    constructor() {
        this.getData();
    }

    getData() {
        $.ajax({
            url: 'https://www.rmv.de/hapi/location.name?accessId=a0d5a70b-d413-4863-a0b9-67ddfef252d6&input=frankfurt%20hauptwache',
            dataType: 'xml',
            success: function(data) {
                console.log("RMV: ", data);
                
                console.log($(data).find('StopLocation').attr('name'));
            }
        })
    }
}