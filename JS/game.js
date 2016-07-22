function getRandList(emoteNb) {
  var randList = [];
  var i = 0;
  var randNB;
  var same = false;

  while (i < 20) {
    randNB = Math.floor(Math.random() * emoteNb);
    for (val in randList) {
      if (randNB == val) {
        same = true;
      }
    }
    if (!same) {
      i++;
      randList.push(randNB);
    }
    same = false;
  }
  console.log(randList);
  return (randList);
}

function getObj(nb) {
  var i = 0;
  for (obj in dataglobal.emotes) {
    if (i == nb)
    return (obj);
    i++;
  }
  return (0);
}

function fillList() {
  var emoteList = [];
  var i = 0;
  for (obj in dataglobal.emotes) {
    i++;
  }
  var randList = getRandList(i);
  i = 0;
  var tmp;
  while (i < 20) {
    var eName = getObj(randList[i]);
    var active = false;
    if (i == 0)
    active = true;
    tmp = {
      emoteName: eName,
      id: dataglobal.emotes[eName].image_id,
      src: "https://static-cdn.jtvnw.net/emoticons/v1/" + dataglobal.emotes[eName].image_id + "/3.0",
      srcMin: "https://static-cdn.jtvnw.net/emoticons/v1/" + dataglobal.emotes[eName].image_id + "/1.0",
      isActive: active,
      userAnswer: "",
      score: false,
    }
    emoteList.push(tmp);
    i++;
  }
  return (emoteList);
}

function getScoreTable(emoteList) {
  console.log(emoteList);
  var data = "";
  var i = 0;

  data += "<div id=\"generated-scoreboard-2\" class=\"col-md-12 score-summary\">";
  data += "<div class=\"container\">";
  data += "<table class=\"table table-hover\">";
  data += "<thead>";
  data += "<tr>";
  data += "<th>#</th>";
  data += "<th>Emote</th>";
  data += "<th>Your Subsmission</th>";
  data += "<th>Answer</th>";
  data += "<th>Success</th>";
  data += "</tr>";
  data += "</thead>";
  data += "<tbody>"

  //tr loop
  while (i < 20) {
    if (emoteList[i].score == true)
    data += "<tr class=\"success\">";
    else
    data += "<tr class=\"danger\">";
    data += "<td>" + (i + 1) + "</td>";
    data += "<td><img class=\"img-responsive\" src=\"" + emoteList[i].srcMin + "\"></img></td>";
    data += "<td>" + emoteList[i].userAnswer + "</td>";
    data += "<td>" + emoteList[i].emoteName + "</td>";
    if (emoteList[i].score == true)
    data += "<td><i class=\"fa fa-check\" aria-hidden=\"true\"></i></td>";
    else
    data += "<td><i class=\"fa fa-times\" aria-hidden=\"true\"></i></td>";
    data += "</tr>";
    i++;
  }

  data += "</tbody>";
  data += "</table>";
  data += "</div>";
  data += "</div>";

  return (data);
}

function showScore(data) {
  var scoreColor;
  var genScoreHTML = "";

  updateDOMScore();
  if (data.score >= 10)
  scoreColor = "color: #449d44;";
  else
  scoreColor = "color: #d9534f;";
  genScoreHTML = getScoreTable(data.emoteList);
  $("#score-content").append(score1HTML);
  $("#final-score").append("<b>Score: <span style=\"" + scoreColor + "\">" + data.score + " / 20</span>");
  $("#score-content").append(genScoreHTML);
}

//DOM Animations
function switchFramesDOM() {
  //$("#frame-" + (this.currentEmote + 1)).attr("class", "animated slideOutDown");
  //$("#frame-" + (this.currentEmote + 1)).attr("style", "display:none;");
}

function updateDOMScore() {
  $("#utility-panel").removeAttr("style");
  $("#score-content").removeAttr("style");
  $("#score-content").attr("class", "animated slideInRight");
}

function updateDOMGame() {
  $("#utility-panel").attr("style", "display:none;");
  $("#score-content").attr("style", "display:none;");
  $("#welcome-content").attr("style", "display:none;");
  $("#game-content").removeAttr("style");
  $("#game-content").attr("class", "text-left animated slideInRight");
  $("#about-content").attr("style", "display:none;");
  $("#play-logo").attr("style", "display:none;");
}

function updateDOMAbout() {
  $("#utility-panel").attr("style", "display:none;");
  $("#score-content").attr("style", "display:none;");
  $("#welcome-content").attr("style", "display:none;");
  $("#game-content").attr("style", "display:none;");
  $("#about-content").removeAttr("style");
  $("#about-content").attr("class", "text-left animated slideInRight");
  $("#about-logo").attr("style", "display:none;");
}

function addMenuDOM() {
  $("#mButtons").removeAttr("style");
  $("#mButtons").attr("class", "panel-body text-center animated slideInRight");
}

function removeMenuDOM() {
  //$("#menu-buttons")..attr("class", "text-left animated slideInRight");
  $("#mButtons").attr("style", "display:none;");
}

function addKappaDOM() {
  $("#kappaDOM").removeAttr("style");
  $("#kappaDOM").attr("class", "animated slideInRight");
  $("#kappaDOM").attr("style", "padding: 20px;");
}

function removeKappaDOM() {
  $("#kappaDOM").attr("style", "display:none;");
}
