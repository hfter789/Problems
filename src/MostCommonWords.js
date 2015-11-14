'use strict'

/*
  fetch hamlet and calculate the most frequent word.
*/
var cheerio = require('cheerio');
var request = require('request');
var $;
var rec = {};
var max = 0;
var maxWord = '';
var link = 'http://shakespeare.mit.edu/hamlet/full.html';
request(link, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body, {xmlMode: true});
    $('blockquote').each(function(i, elem) {
      var textArr = $(this).text().toLowerCase().match(/[a-z]+/g);
      for (var i = 0; i < textArr.length; i++) {
        var text = '_' + textArr[i];
        var count = rec[text]+1 || 1;
        if(count > max) {
          max = count;
          maxWord = text;
        }
        rec[text] = count;
      }
    });
    console.log(maxWord, max);
    console.log(rec);
  }
});