var xmlHttp = null;
var json = null;
reloadInterval();

function reloadInterval() {
try {
    xmlHttp = new XMLHttpRequest();
} catch(e) {
 
}
if (xmlHttp) {
    xmlHttp.open('GET', 'https://arsnova.eu/api/statistics/', true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          json = JSON.parse(xmlHttp.responseText);
        }
    };
    xmlHttp.send(null);
  }

}

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawSession);
    function drawSession() {
      var sessions = google.visualization.arrayToDataTable([
        ["Arsnova", "Sessions", { role: "style" } ],
        ['Sessions', json.sessions, "red"],
        ['Offene Sessions', json.openSessions, "blue"],
        ['Geschlossene Sessions',json.closedSessions, "yellow"],
	['Session-Inhaber',json.creators,"green"]
      ]);
	
      var viewSessions = new google.visualization.DataView(sessions);
      viewSessions.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
      var options = {
        title: "Sessions",
        width: screen.height/1.5,
        height: screen.height/1.5,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
	backgroundColor: { fill: "#B6BDB7"},
      };
      var chartSession = new google.visualization.BarChart(document.getElementById("barchart_session"));
      chartSession.draw(viewSessions, options);

  }
    google.charts.setOnLoadCallback(drawStudens);
 	function drawStudens() {
	var studens=google.visualization.arrayToDataTable([
	["Arsnova", "Personen", { role: "style" } ],
	['Aktive Studenten', json.activeStudents,"red"],
	['Fragen der Studierenden',json.interposedQuestions,"blue"],
	['Antworten',json.answers,"yellow"]
      ]);
	
      var viewStudens = new google.visualization.DataView(studens);
      viewStudens.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation"},
                       2]);
      var options = {
        title: "Studens",
        width: screen.height/1.5,
        height: screen.height/1.5,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
	backgroundColor: { fill: "#B6BDB7"},
      };
      var chartStudens = new google.visualization.BarChart(document.getElementById("barchart"));
      chartStudens.draw(viewStudens, options);

  }
    google.charts.setOnLoadCallback(drawQuest);
 	function drawQuest() {
	var quest=google.visualization.arrayToDataTable([
	["Arsnova", "Fragen", { role: "style" } ],
	['Hörsaalfragen',json.lectureQuestions,"red"],
	['Vorbereitungsaufgaben',json.preparationQuestions,"blue"],
	['Vorher-Nachher-Abstimmungen',json.conceptQuestions,"yellow"],
        ['Alle verfügbaren Fragen',json.questions,"green"]
      ]);
	
      var viewQuest = new google.visualization.DataView(quest);
      viewQuest.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation"},
                       2]);
      var options = {
        title: "Fragen",
        width: screen.height/1.5,
        height: screen.height/1.5,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
	backgroundColor: { fill: "#B6BDB7"},
      };
      var chartQuest = new google.visualization.BarChart(document.getElementById("barchartQuest"));
      chartQuest.draw(viewQuest, options);

  }
    google.charts.setOnLoadCallback(drawMoment);
 	function drawMoment() {
	var moment=google.visualization.arrayToDataTable([
	["Arsnova", "Fragen", { role: "style" } ],
	['Aktive Benutzer',json.activeUsers,"red"],
	['Eingeloggte Benutzer',json.loggedinUsers,"blue"]
      ]);
	
      var viewMoment = new google.visualization.DataView(moment);
      viewMoment.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation"},
                       2]);
      var options = {
        title: "Aktive",
        width: screen.height/1.5,
        height: screen.height/1.5,
        bar: {groupWidth: "100%"},
        legend: { position: "bottom" },
	backgroundColor: { fill: "#B6BDB7"},
      };
      var chartMoment = new google.visualization.BarChart(document.getElementById("barchartMoment"));
      chartMoment.draw(viewMoment, options);

  }



setInterval(function() {
  reloadInterval();
  drawSession();
  drawStudens();
  drawQuest();
}, 30000); 





