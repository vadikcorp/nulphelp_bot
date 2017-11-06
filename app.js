'use strict';
const cheerio = require('cheerio')
const Telegram = require('telegram-node-bot'),
    tg = new Telegram.Telegram('<YOUR TOKEN>', {
        workers: 1,
    });

const botController = require('./controllers/do')
    , OtherwiseController = require('./controllers/otherwise');

const botCtrl = new botController();

tg.router
    //Start must open main menu
    .when(new Telegram.TextCommand('/start', 'startCommand'), botCtrl)
    //Subject must give us sujects and exam
    .when(new Telegram.TextCommand('/subjects', 'subjectsCommand'), botCtrl)
    //different stuff that help student
    .when(new Telegram.TextCommand('/stuff', 'stuffCommand'), botCtrl)
    //Important news
    .when(new Telegram.TextCommand('/news', 'newsCommand'), botCtrl)
    //Help
    .when(new Telegram.TextCommand('/help', 'helpCommand'), botCtrl)
    //Weather
    .when(new Telegram.TextCommand('/weather', 'weatherCommand'),botCtrl)
    .otherwise(new OtherwiseController());
