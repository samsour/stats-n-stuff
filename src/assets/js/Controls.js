import $ from 'jquery';

export default class Controls {

    constructor() {
    }

    bindKeyEvents() {
        $('#coinNameInput').keyup(function(event) {
            if (event.keyCode === 13) { //ENTER
                addNewCoin();
            }
        });
    }

    watchEvents() {
        $('#new-coin-btn').click(function() {
            addNewCoin();
        });
        
        $('#options-btn').click(function() {
            options.toggleContainer();
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

            if(coinCounter < 6) {    
                coinCounter++;
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