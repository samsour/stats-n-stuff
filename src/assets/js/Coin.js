import $ from 'jquery';

export default class Coin {

    get name() { return this._name };
    set name(name) { this._name = name };
    
    get price() { return this._price };
    set price(price) { this._price = price };

    get percent_change_1h() { return this._percent_change_1h};
    get percent_change_1h() { return this._percent_change_1h};

    get percent_change_24h() { return this._percent_change_24h};
    get percent_change_24h() { return this._percent_change_24h};

    get percent_change_7d() { return this._percent_change_7d};
    get percent_change_7d() { return this._percent_change_7d};

    get lastUpdated() { return this._lastUpdated};
    get lastUpdated() { return this._lastUpdated};
    
	constructor(url) {
		this.getData(url);
    }
    
    getData(coinUrl) {
        $.ajax({
            //url: 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=20',
            url: coinUrl,
            dataType: 'json',
            success: function(data) {
                console.log("Coins JSON: ", data);

                this._name = data[0].name;
                this._price = data[0].price_eur;
                this._percentChange1h = data[0].percent_change_1h;
                this._percentChange24h = data[0].percent_change_24h;
                this._percentChange7d = data[0].percent_change_7d;
                this._lastUpdated = new Date(data[0].last_updated * 1000);

            
                console.log("Display coin: " + this._name);

                $('.coin-name').html(this._name);
                $('.coin-price').html(this._price);
                $('.percent-change-1h').html(this._percentChange1h);
                $('.percent-change-24h').html(this._percentChange24h);
                $('.percent-change-7d').html(this._percentChange7d);
                $('.last-updated').html(this._lastUpdated.getHours() + ":" + this._lastUpdated.getMinutes());
                

                // $('.coins').html(
                //     'In '
                //     + location
                //     + ' sind es ' 
                //     + temperature 
                //     + '°C und '
                //     + conditionText 
                //     + '. Es fühlt sich ' 
                //     + checkPhrase(temperature, feelsLike) 
                //     + ' an wie ' + data.current.feelslike_c + '°C.'
                // );
                
                // function checkPhrase(temp1, temp2) {
                //     if(temp1 == temp2) {
                //         return 'auch';
                //     } else {
                //         return 'aber';
                //     }
                // }
            }
        });
    }

    printResults() {

    }
}

/*

24h_volume_eur
:
"30858557.6546"
24h_volume_usd
:
"37988600.0"
available_supply
:
"2779530283.0"
id
:
"iota"
last_updated
:
"1521188350"
market_cap_eur
:
"2506702482.0"
market_cap_usd
:
"3085890111.0"
max_supply
:
"2779530283.0"
name
:
"IOTA"
percent_change_1h
:
"0.03"
percent_change_7d
:
"-12.72"
percent_change_24h
:
"1.53"
price_btc
:
"0.00013458"
price_eur
:
"0.9018439184"
price_usd
:
"1.11022"
rank
:
"13"
symbol
:
"MIOTA"
total_supply
:
"2779530283.0"

*/