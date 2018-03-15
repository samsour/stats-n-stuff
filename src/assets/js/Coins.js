import $ from 'jquery';

export default class Coins {

	constructor() {
		this.getData();
    }
    
    getData() {
        $.ajax({
            url: 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=20',
            dataType: 'json',
            success: function(data) {
                console.log("Coins JSON: ", data);
                
            }
        });
    }
}