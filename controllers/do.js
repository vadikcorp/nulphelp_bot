 'use strict';
const cheerio = require('cheerio')
const Telegram = require('telegram-node-bot');
const request = require('request');

class botController extends Telegram.TelegramBaseController {

    startHandler($) {
      var menu = {
        message: 'Міау',
        layout: [2,3],
        resizeKeyboard: true,
        // oneTimeKeyboard: true,
        'Subjects': (choose$) => {

          this.subjectsHandler(choose$)
        },
        'Weather': (choose$) => {
          this.weatherHandler(choose$)
        },
        'Stuff': (choose$) => {
          this.stuffHandler(choose$)
        },
        'News': (choose$) => {
          choose$.sendMessage('<b>Новини варті уваги:</b> \n\n <a href="http://www.lp.edu.ua/event/2017/nich-u-biblioteci-u-stinah-naukovo-tehnichnoyi-biblioteky-lvivskoyi-politehniky">"Ніч у бібліотеці» у стінах Науково-технічної бібліотеки Львівської політехніки"</a> \n\n <a href="http://www.lp.edu.ua/news/2017/sim-prychyn-ne-spaty-dobu-chomu-aytishnykam-lvivskoyi-politehniky-treba-vzyaty-uchast-u">"Сім причин не спати добу: чому айтішникам Львівської політехніки треба взяти участь у BEST::HACKathon (2017)"</a> \n\n <a href="http://www.lp.edu.ua/news/2017/gdanska-i-lvivska-politehniky-ta-lvivskyy-nacionalnyy-universytet-imeni-ivana-franka">Ґданська і Львівська політехніки та Львівський національний університет імені Івана Франка підписали угоди про співпрацю</a> \n\n <a href="http://www.lp.edu.ua/news/2017/hto-hoche-zirvaty-maybutnye-studentske-novosillya-budivnyctvo-novogo-gurtozhytku">Хто хоче зірвати майбутнє студентське новосілля?</a>', { parse_mode: 'HTML' });
          this.startHandler(choose$)
        },
        'Help❓': (choose$) => {
          choose$.sendMessage('<b>Цей бот не являється офіційним чатботом НУЛП, \nваші побажання і зауваження можете залишити на сайті</b> \n <a href="https://vadikcorp.github.io/nuphelp_site/">- nulphelp_bot site -</a> \n\n<b>Майбутні функцій:</b>\n<i>-text convert to telegra.ph </i>\n\n <b>created by @vadikcorp</b>', { parse_mode: 'HTML' })
          this.startHandler(choose$)
        }
      }
      $.runMenu(menu)
    }

    subjectsHandler($) {
            $.runMenu({
                message: 'Розклад',
                layout: [2],
                resizeKeyboard: true,
                'paru': () => {
                      $.runMenu({
                        message: 'mayv',
                        layout: [5,2],
                        resizeKeyboard: true,
                        'Пн': (choose$) => {
                                this.subjectsHandler(choose$)
                            },
                        'Вт': (choose$) => {
                                this.subjectsHandler(choose$)
                            },
                        'Ср': (choose$) => {
                                this.subjectsHandler(choose$)
                            },
                             'Чт': (choose$) => {
                                this.subjectsHandler(choose$)
                            },
                        'Пт': (choose$) => {
                                this.subjectsHandler(choose$)
                            },

                          'today': (choose$) => {
                            this.subjectsHandler(choose$)
                          },

                          'Menu': (choose$) => {
                            choose$.sendMessage('Переход на /start')
                            this.startHandler(choose$)
                          }
                        })
                      },

                'exam': (choose$) => {
                    this.subjectsHandler(choose$)
                    $.sendMessage("Не спіши по перед батька в пекло, до сесії ще багато часу:)");
                },

                'Menu': (choose$) => {
                  this.startHandler(choose$)
                }
              })
            }

    stuffHandler($) {

          $.runMenu({
            message: 'міау:',
            layout: [3,1],
            resizeKeyboard: true,
            'Schedule': (choose$) => {
              $.sendMessage('Графік навчального процесу 2017/2018');
              $.sendDocument('http://www.lp.edu.ua/sites/default/files/attach/2016/2972/serv_r_grafik_bac_c_2017.pdf');
              this.stuffHandler(choose$)
            },
            'Map': (choose$) => {
              $.runMenu({
                message: 'виберіть потрібний корпус',
                layout: [5,5,5,5],
                resizeKeyboard: true,
                '1':(choose$) => {
                  $.sendMessage('Корпус №1 НУ "ЛП"');
                  $.sendLocation(49.835502, 24.0096036);
                  this.stuffHandler(choose$)},
                '2':(choose$) => {
                  $.sendMessage('Корпус №2 НУ "ЛП"');
                  $.sendLocation(49.8365167, 24.0136344);
                  this.stuffHandler(choose$)},
                '3':(choose$) => {
                  $.sendMessage('Корпус №3 НУ "ЛП"');
                  $.sendLocation(49835529, 24011589);
                  this.stuffHandler(choose$)},
                '4':(choose$) => {
                  $.sendMessage('Корпус №4 НУ "ЛП"');
                  $.sendLocation(49.8363475, 24.0108771);
                  this.stuffHandler(choose$)},
                '5':(choose$) => {
                  $.sendMessage('Корпус №5 НУ "ЛП"');
                  $.sendLocation(49.835099, 24.008529);
                  this.stuffHandler(choose$)
                },
                '6':(choose$) => {
                  $.sendMessage('Корпус №6 НУ "ЛП"');
                  $.sendLocation(49.8351185, 24.0061816);
                  this.stuffHandler(choose$)
                },
                '6a':(choose$) => {
                  $.sendMessage('Корпус №6a НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '7':(choose$) => {
                  $.sendMessage('Корпус №7 НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '8':(choose$) => {
                  $.sendMessage('Корпус №58 НУ "ЛП"');
                  $.sendLocation(49.8374704, 24.0119252);
                  this.stuffHandler(choose$)
                },
                '9':(choose$) => {
                  $.sendMessage('Корпус №9 НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '10':(choose$) => {
                  $.sendMessage('Корпус №10 НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '11':(choose$) => {
                  $.sendMessage('Корпус №11 НУ "ЛП"');
                  $.sendLocation(49.8358467, 24.0159322);
                  this.stuffHandler(choose$)
                },
                '14':(choose$) => {
                  $.sendMessage('Корпус №14 НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '15':(choose$) => {
                  $.sendMessage('Корпус №15 НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '16':(choose$) => {
                  $.sendMessage('Корпус №16 НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '19':(choose$) => {
                  $.sendMessage('Корпус №19 НУ "ЛП"');
      $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                '33':(choose$) => {
                  $.sendMessage('Корпус №33 НУ "ЛП"');
$.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                'НТБ':(choose$) => {
                  $.sendMessage('Корпус НТБ НУ "ЛП"');
                    $.sendLocation(49.8369465, 24.0120729);//kek
                  this.stuffHandler(choose$)
                },
                'СБ':(choose$) => {
                  $.sendMessage('Корпус СБ НУ "ЛП"');
                  $.sendLocation(49.8369465, 24.0120729);
                  this.stuffHandler(choose$)
                },
                'КХ':(choose$) => {
                  $.sendMessage('Корпус КХ НУ "ЛП"');
                  $.sendLocation(49.8362102, 24.0129284);
                  this.stuffHandler(choose$)
                },
                'Menu':(choose$) => {this.stuffHandler(choose$)}
              })
            },
            'Contact': (choose$) => {
              $.sendMessage('<b>Корисні контакти:</b> \nВ процесі\n<i>P.S. знайдені у вільному доступі</i>', {parse_mode: 'HTML'});
              this.stuffHandler(choose$)
            },
            'Menu': (choose$) => {
              this.startHandler(choose$)
            }
          })
    }

    newsHandler($) {
    }

    helpHandler($) {
      $.runMenu({
        message: "Цей бот не являється офіційним чатботом НУЛП, ваші побажання і зауваження можете залишити на сайті https://vadikcorp.github.io/nuphelp_site/ \n\nМайбутні функцій:\n-text convert to telegra.ph \n\n created by @vadikcorp ",
        layout: 1,
        resizeKeyboard: true,
        'Menu': (choose$) => {
          choose$.sendMessage('Переход на /start')
          this.startHandler(choose$)
        }
      })
  }

    weatherHandler($) {
      var url = "https://ua.sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D0%BB%D1%8C%D0%B2%D1%96%D0%B2";
      $.runMenu({
        message: 'міау',
        layout: [3,1],
        resizeKeyboard: true,
        'today': (choose$) => {
          var arr = [];
          request(url,function(err, rest, body){
            var b = cheerio.load(body);
            arr.push({
              day: b('.loaded>p.day-link').text().trim(),
              num: b('.loaded>p.date').text().trim(),
              month: b('.loaded>p.month').text().trim(),
              temp: b('.loaded>.temperature').text().trim(),
              desc: b('.rSide>.description').eq(0).text().trim(),
            })
            $.sendMessage('Сьогодні ' + '\n' + arr[0].day + ' ' + arr[0].num + ' ' + arr[0].month + '\n'+ arr[0].temp + '\n' + arr[0].desc)
          })

          this.weatherHandler(choose$)
        },
        'завтра': (choose$) => {
          var arr = [];
          request(url,function(err, rest, body){
            var b = cheerio.load(body);

              arr.push({
                day: b('#bd2>p>a.day-link').text().trim(),
                num: b('#bd2>p.date').text().trim(),
                month: b('#bd2>p.month').text().trim(),
                temp: b('#bd2>.temperature').text().trim(),
              })
              $.sendMessage('\n' + arr[0].day + ' ' + arr[0].num + ' ' + arr[0].month + '\n'+ arr[0].temp + '\n')


          })
          this.weatherHandler(choose$)
        },
        'післязавтра': (choose$) => {
          var arr = [];
          request(url,function(err, rest, body){
            var b = cheerio.load(body);
              arr.push({
                day: b('#bd3>p>a.day-link').text().trim(),
                num: b('#bd3>p.date').text().trim(),
                month: b('#bd3>p.month').text().trim(),
                temp: b('#bd3>.temperature').text().trim(),
                // ico: b('#bd1.weatherIco d320').attr('title').text()
              })
              $.sendMessage('\n' + arr[0].day + ' ' + arr[0].num + ' ' + arr[0].month + '\n'+ arr[0].temp + '\n');
          })
          this.weatherHandler(choose$)
        },
        'Menu': (choose$) => {
          this.startHandler(choose$)
        }
    })
  }
    get routes() {
        return {
            'startCommand': 'startHandler',
            'subjectsCommand': 'subjectsHandler',
            'stuffCommand': 'stuffHandler',
            'newsCommand': 'newsHandler',
            'helpCommand': 'helpHandler',
            'weatherCommand': 'weatherHandler'
        };
    }
  }
module.exports = botController;
