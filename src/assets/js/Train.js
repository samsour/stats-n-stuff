import $ from 'jquery';

export default class Train {
    constructor() {
        this.getData();
    }

    getData() {
        $.ajax({
            url: 'https://www.rmv.de/hapi/trip?accessId=a0d5a70b-d413-4863-a0b9-67ddfef252d6&format=json&originExtId=003000510&destExtId=003002498&numF=6&viaId=3060774&time=16:00',
            dataType: 'xml',
            success: function(data) {
                console.log("RMV: ", data);
                $('.trains').html(data);
            }
        })
    }
}