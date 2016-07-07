//main module
(function() {
  var app = angular.module('twitchEmoteGame', ['ngAnimate']);

  app.controller('MenuController', function() {
    this.showGame = function() {
      console.log("Game");
      $("#welcome-content").attr("style", "display:none;");
      $("#about-content").attr("style", "display:none;");
      $("#play-logo").attr("style", "display:none;");
    };
    this.showAbout = function() {
      console.log("About");
      $("#welcome-content").attr("style", "display:none;");
      $("#about-content").removeAttr("style");
      $("#about-content").attr("class", "text-left animated slideInRight");
      $("#about-logo").attr("style", "display:none;");
    };
  });

  app.controller('GameController', function() {

  });
})();
