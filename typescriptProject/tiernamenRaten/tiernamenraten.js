const prompt = require("prompt-sync")({ sigint: true });

var tiernamenListe = [
  "Fuchs",
  "Dachs",
  "Elefant",
  "Delphin",
  "Fuchs",
  "Gans",
  "Giraffe",
];

var tiernameAusgabe = "";
var userEingabe = "";

var exit = false;
while (!exit) {
  var tiernameGesucht =
    tiernamenListe[Math.floor(Math.random() * tiernamenListe.length)];
  var tiernameTemp = tiernameGesucht.toLowerCase();
  var buchstabenListe = [];
  for (let i = 0; i < tiernameGesucht.length; i++) {
    tiernameAusgabe += "-";
  }
  console.log(tiernameAusgabe);
  for (var versuche = 7; versuche > 0; versuche--) {
    var usereingabevalid = false;
    while (!usereingabevalid) {
        console.log("Versuche: ",versuche)
      userEingabe = prompt("Bitte Buchstaben eingeben: ").toLowerCase();
      if (userEingabe.length == 1 && userEingabe.match(/[a-z]/i)) {
        usereingabevalid = true;
        break;
      }
    }
    buchstabenListe.push(userEingabe);
    if (tiernameTemp.includes(userEingabe)) {
      for (let i = 0; i < tiernameGesucht.length; i++) {
        if (tiernameTemp.split("")[i] == userEingabe) {
          if (i == 0) {
            tiernameAusgabe = tiernameAusgabe.split("");
            tiernameAusgabe[i] = userEingabe.toUpperCase();
          } else {
            tiernameAusgabe = tiernameAusgabe.split("");
            tiernameAusgabe[i] = userEingabe.toLowerCase();
          }
          tiernameTemp = tiernameTemp.split("");
          tiernameTemp[i] = "-";
          tiernameTemp = tiernameTemp.join("");
          tiernameAusgabe = tiernameAusgabe.join("");
        }
    }
    versuche++
      if (tiernameAusgabe == tiernameGesucht) {
        console.log(
          "Herzlichen Glückwunsch!"          
        );
        versuche = 0;
      }
    }
    console.log(tiernameAusgabe);
    console.log(buchstabenListe);
  }
  if (tiernameAusgabe != tiernameGesucht) {
    console.log("leider verloren");
  }
  var inputIncorrect = true;
  while (inputIncorrect) {
    inputIncorrect = false;
    var nochmal = prompt("nochmal? (Y/N)").toLowerCase();
    switch (nochmal) {
      case 'y':
        break;
      case 'n':
        exit = true;
        break;
      default:
        inputIncorrect = true;
        break;
    }
  }
}
