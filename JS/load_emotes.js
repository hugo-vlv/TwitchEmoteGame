var dataglobal = 42;

$.getJSON("https://twitchemotes.com/api_cache/v2/global.json", function (dataG) {
    dataglobal = dataG;
      console.log(dataglobal.emotes);
});

$(document).ready(function () {

});
