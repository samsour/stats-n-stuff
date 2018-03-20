import $ from 'jquery';

export default class Coin {

    get name() { return this._name };
    set name(name) { this._name = name };
    
    get price() { return this._price };
    get percentChange1h() { return this._percentChange1h };
    get percentChange24h() { return this._percentChange24h};
    get percentChange7d() { return this._percentChange7d};
    get lastUpdated() { return this._lastUpdated};

    
	constructor(url) {
        this.getData(url);
        // this.coinCounter++;
    }
    
    getData(url) {

        let self = this;

        $.ajax({
            //url: 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=20',
            url: url,
            dataType: 'json',
            success: function(data) {
            
                console.log(data[0].name + " JSON: " , data);

                // set class variables to api values
                this._name = data[0].name;
                this._price = data[0].price_eur;
                this._percentChange1h = data[0].percent_change_1h;
                this._percentChange24h = data[0].percent_change_24h;
                this._percentChange7d = data[0].percent_change_7d;
                this._lastUpdated = new Date(data[0].last_updated * 1000);

                self.createHtml(this._name);

                // print in html
                let className = '.' + this._name.toLowerCase();
                
                $(className + ' .coin-name').html(this._name);

                $(className + ' .coin-price').html(parseFloat(this._price).toFixed(4) + '€');

                let change1h = self.checkPercentage(this._percentChange1h);
                $(className + ' .percent-change-1h').html(change1h + ' (1H)');

                let change24h = self.checkPercentage(this._percentChange24h);
                $(className + ' .percent-change-24h').html(change24h + ' (24H)');

                let change7d = self.checkPercentage(this._percentChange7d);
                $(className + ' .percent-change-7d').html(change7d + ' (7D)');
                
                let minutes = self.checkNumber(this._lastUpdated.getMinutes());
                $(className + ' .last-updated').html(this._lastUpdated.getHours() + ":" + minutes);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('.error-msg').remove();
                $('.coin-wrapper').append('<div class="error-msg">' + ajaxOptions.toUpperCase() + ' ' + xhr.status + thrownError + ' :(' + '</div>');
            }
        });
    }

    createHtml(coin) {

        $('.coins').append('<div class="coin-item ' 
        + coin.toLowerCase()
        + '"><div class="coin-item-data"><div class="coin-name"></div><div class="coin-price"></div><div class="last-updated"></div></div><div class="coin-item-data hidden"><div class="rate percent-change-1h"></div><div class="rate percent-change-24h"></div><div class="rate percent-change-7d"></div></div><div class="coin-item-close hidden"><button type="button" class="remove-coin" id="closeCoin-' + /*coin counter +*/ '">x</button></div></div>')
    }

    /*
                        <div class="coin-item iota">
                            <div class="coin-item-data">
                                <div class="coin-name">IOTA</div>
                                <div class="coin-price">1.0539€</div>
                                <div class="last-updated">10:24</div>
                            </div>
                            <div class="coin-item-data hidden">
                                <div class="rate percent-change-1h">
                                    <span class="red">-0.44%</span> (1H)
                                </div>
                                <div class="rate percent-change-24h">
                                    <span class="green">6.25%</span> (24H)
                                </div>
                                <div class="rate percent-change-7d">
                                <span class="red">-1.7%</span> (7D)
                            </div>
                        </div>
                        <div class="coin-item-close hidden">
                            <button type="button" class="remove-coin" id="closeCoin-">x</button>
                        </div>
                        */

    checkNumber(i) {
		if (i < 10) {i = "0" + i};  
		return i;
    }
    
    checkPercentage(i) {
        if (i > 0) {
            return '<span class="green">' + i + '%' + '</span>'
        } else if (i < 0) {
            return '<span class="red">' + i + '%' + '</span>'
        } else {
            return i + '%';
        }
    }
}