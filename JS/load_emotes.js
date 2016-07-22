var dataglobal = 42;


// Temp Request
$.getJSON("RES/json/global_emotes.json", function (dataG) {
    dataglobal = dataG;
      console.log(dataglobal.emotes);
});


//Request
/*$.getJSON("https://twitchemotes.com/api_cache/v2/global.json", function (dataG) {
    dataglobal = dataG;
      console.log(dataglobal.emotes);
});*/

$(document).ready(function () {

});
