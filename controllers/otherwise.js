'use strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
    handle($) {
        $.sendMessage('Sorry, Я тебе не розуміти.');
    }
}

module.exports = OtherwiseController;
