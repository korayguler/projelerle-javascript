"use strict";

var api = 'https://api.exchangeratesapi.io/latest?base=TRY';

function getData(api) {
  fetch(api).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data.rates);
    var TRY = data.rates.TRY;
    var USD = TRY / data.rates.USD;
    var EUR = TRY / data.rates.EUR;
    var GBP = TRY / data.rates.GBP;
    setData(USD, EUR, GBP);
  })["catch"](function (err) {
    return console.warn(err);
  });
}

function setData(USD, EUR, GBP) {
  var dollar = document.getElementById('dollar');
  var euro = document.getElementById('euro');
  var sterlin = document.getElementById('sterlin');
  dollar.textContent = USD.toString().slice(0, 4);
  euro.textContent = EUR.toString().slice(0, 4);
  sterlin.textContent = GBP.toString().slice(0, 4);
}

getData(api);
setInterval(function () {
  getData(api);
}, 30000);