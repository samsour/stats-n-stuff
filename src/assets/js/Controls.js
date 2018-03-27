import $ from 'jquery';
import Coin from './Coin.js';


export default class Controls {

    constructor() {
        this.coinCounter = 0;
    }

    bindKeyEvents() {
        const self = this;

        $('#coinNameInput').keyup(function(event) {
            if (event.keyCode === 13) { //ENTER
                self.addNewCoin();
            }
        });
    }

    watchEvents() {
        const self = this;

        $('#new-coin-btn').click(function() {
            self.addNewCoin();
        });

        $('#options-btn').click(function() {
            $('.options-container').toggle('fast');
        })

        $('.option-btn').click(function(event) {

            for (let button of $('.option-btn')) {
                $(button.parentElement).removeClass('active');
            }
            
            $(event.currentTarget.parentElement).addClass('active');
        })
    }

    addNewCoin() {
        if($('#coinId').val() != '' ) {
            const newCoin = $('#coinNameInput').val();
            const newCoinObject = new Coin('https://api.coinmarketcap.com/v1/ticker/' + newCoin + '/?convert=EUR');

            if(this.coinCounter < 5) {    
                this.coinCounter++;
            } else {
                $('.new-coin').toggle();
                $('.coin-wrapper').append('<div class="error-msg">Maximale Anzahl an Coins erreicht.</div>');
            }
            $('.input-coin-name').val('');
        } else {
            $('.error-msg').remove();
            $('.coin-wrapper').append('<div class="error-msg">Eingabe erforderlich.</div>');
        }
    }
}