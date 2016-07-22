var gameStartHTML = "<div id=\"generated-start-menu\" class=\"text-center\"><h1><b>Ready ?</b></h1><br><br><button id=\"startBtn\" class=\"btn btn-success btn-lg start\">Start !</button><br><div class=\"col-md-2\"></div><div class=\"text-center col-md-3\"><img height=\"150\" width=\"150\" class=\"img-responsive emote-start\" src=\"RES/image/Feels-Good-Man-Frog-06.png\"/></div><div class=\"col-md-4\"></div><div class=\"text-center col-md-3\"><img height=\"150\" width=\"150\" class=\"img-responsive emote-start\" src=\"RES/image/Feels-Good-Man-Frog-06.png\"/></div></div>";
var score1HTML = "<div id=\"generated-scoreboard\" class=\"score-header\"><div class=\"col-md-5\"><div class=\"text-center\"><h1><b>Serie Finished !</b></h1></div></div><div class=\"col-md-2 text-center\"><img src=\"RES/image/seemsgood.png\" height=\"100\" width=\"100\"></img></div><div class=\"col-md-5\"><div id=\"score-container\" class=\"text-center\"><h1 id=\"final-score\"></h1></div></div></div>";
var startBtnEventOver;
var startBtnEventOut;
var startBtnClick;
var gscope;

function removeGameEvents() {
  startBtnEventOver.remove();
  startBtnEventOut.remove();
  startBtnClick.remove();
}

//main module
(function() {
  var app = angular.module('twitchEmoteGame', ['ngAnimate']);
  var startGame = function () {
    $('#generated-start-menu').remove();
    $('#game-content').append(gameStartHTML);

    startBtnEventOver = $("#startBtn").mouseover(function () {
      $(".emote-start").attr("class", "img-responsive emote-start animated infinite tada");
    });
    startBtnEventOut = $("#startBtn").mouseout(function () {
      $(".emote-start").attr("class", "img-responsive emote-start");
    });
    startBtnClick = $('#startBtn').on('click', function () {
      removeMenuDOM();
      addKappaDOM();
      $("#generated-scoreboard").remove();
      $("#generated-scoreboard-2").remove();
      $('#generated-start-menu').remove();
      var controllerElement = document.querySelector('body');
      var controllerScope = angular.element(controllerElement).scope();
      gscope = controllerScope;
      controllerScope.$$childTail.game.resetGame();
      controllerScope.$$childTail.game.hereWeGo(controllerScope);
    });
  };

  //Menu Controller
  app.controller('MenuController', function() {
    this.showGame = function() {
      if (startBtnEventOver && startBtnEventOut)
      removeGameEvents();
      updateDOMGame();
      startGame();
    };
    this.showAbout = function() {
      if (startBtnEventOver && startBtnEventOut)
      removeGameEvents();
      updateDOMAbout();
    };
    this.showScores = function() {
      if (startBtnEventOver && startBtnEventOut)
      removeGameEvents();
      console.log("In Construction");
    }
  });

  //Game Controller
  app.controller('GameController', function() {
    this.launched = false;
    this.score = 0;
    this.currentEmote = 0;
    this.answer = "";
    this.emoteList = [];
    this.hereWeGo = function(scope) {
      scope.$apply(this.launched = true);
      scope.$apply(this.emoteList = fillList());
    };
    this.nextFrame = function(nb) {
      switchFramesDOM();
      this.emoteList[this.currentEmote].isActive = false;
      if (nb == 0)
      this.emoteList[this.currentEmote].userAnswer = "Skipped";
      else
      this.emoteList[this.currentEmote].userAnswer = this.answer;
      if ((this.answer == this.emoteList[this.currentEmote].emoteName) && (nb == 1)) {
        this.score++;
        this.emoteList[this.currentEmote].score = true;
      }
      //END
      if (this.currentEmote >= 19) {
        addMenuDOM();
        removeKappaDOM();
        showScore(this);
      }
      else {
        this.emoteList[this.currentEmote + 1].isActive = true;
        console.log(this.emoteList[this.currentEmote + 1].emoteName);

      }
      this.answer = "";
      this.currentEmote++;
    };
    this.resetGame = function() {
      this.score = 0;
      this.launched = false;
      this.emoteList = [];
      this.answer = "";
      this.currentEmote = 0;
    };
  });
})();

//events
$(document).ready(function () {
  $("#teg-title").mouseover(function () {
    $("#headermp").attr("class", "text-center animated infinite pulse");
  });
  $("#teg-title").mouseout(function () {
    $("#headermp").attr("class", "text-center");
  });
});
