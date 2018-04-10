import $ from 'jquery';
import Coin from './Coin.js';


export default class Controls {

    constructor(user, options) {
        this.coinCounter = 0;
        this.user = user;
        this.options = options;
    }

    bindKeyEvents() {
        const self = this;

        // Coins

        $('#coinNameInput').keyup(function(event) {
            if (event.keyCode === 13) { //ENTER
                self.addNewCoin();
            }
        });

        // Options

        $('#userNameInput').keyup(function(event) {
            if (event.keyCode === 13) { //ENTER
                self.user.name = $('#userNameInput').val();
            }
        });
        
        $('#locationInput').keyup(function(event) {
            if (event.keyCode === 13) { //ENTER
                self.user.location = $('#locationInput').val();
            }
        });

        $('#langInput').keyup(function(event) {
            if (event.keyCode === 13) { //ENTER
                self.user.lang = $('#langInput').val();
            }
        });
    }

    watchEvents() {
        const self = this;

        $('#newCoinBtn').click(function() {
            self.addNewCoin();
        });

        $('#optionsBtn').click(function() {
            $('.options-container').toggle('fast');
            $('.options-controls-save-btn').toggle('fast');
        })

        $('.option-btn').click(function(event) {

            for (let button of $('.option-btn')) {
                $(button.parentElement).removeClass('active');
            }
            
            $(event.currentTarget.parentElement).addClass('active');
        })

        $('#optionsSaveBtn').click(function() {
            self.user.name = $('#userNameInput').val();
            self.user.location = $('#locationInput').val();
            self.user.lang = $('#langInput').val();
            self.options.saveSettings(self.user);
            location.reload();
        })
    }

    addNewCoin() {

        if($('#coinNameInput').val() != '' ) {
            const newCoin = $('#coinNameInput').val();
            console.log(newCoin);
            
            const newCoinObject = new Coin('https://api.coinmarketcap.com/v1/ticker/' + newCoin + '/?convert=EUR');
            
            this.user.addCoin(newCoin);
            console.log(this.user);

            if(this.coinCounter < 5) {    
                this.coinCounter++;
            } else {
                $('.new-coin').toggle();
                $('.coin-wrapper').append('<div class="error-msg">Maximale Anzahl an Coins erreicht.</div>');
            }
            $('.input-coin-name').val('');
        } else { //remove current error messages to prevent duplicated error messages
            $('.error-msg').remove();
            $('.coin-wrapper').append('<div class="error-msg">Eingabe erforderlich.</div>');
        }
    }
}