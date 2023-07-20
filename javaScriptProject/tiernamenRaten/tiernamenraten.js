const prompt = require("prompt-sync")({ sigint: true });

var tiernamenListe = ["Fuchs", "Dachs", "Elefant"];// "Gans", "Elefant", "Giraffe"
var tiernameGesucht =
  tiernamenListe[Math.floor(Math.random() * tiernamenListe.length)];
var tiernameTemp = tiernameGesucht.toLowerCase();
var buchstabenListe = [];
var tiernameAusgabe = "";
var userEingabe = "";

for (let i = 0; i < tiernameGesucht.length; i++) {
  tiernameAusgabe += "-";
}
console.log(tiernameAusgabe);
for (let versuche = 7; versuche > 0; versuche--) {
  var usereingabevalid = false;
  while (!usereingabevalid) {
    userEingabe = prompt("Bitte Buchstaben eingeben: ").toLowerCase();
    if (userEingabe.length == 1 && userEingabe.match(/[a-z]/i)) {
      usereingabevalid = true;
      break;
    }
  }
  buchstabenListe.push(userEingabe);
  if (tiernameTemp.includes(userEingabe)) {
    for (let i = 0; i < tiernameGesucht.length; i++) {
      if (tiernameTemp.split('')[i] == userEingabe) {
        if (i == 0) {
          tiernameAusgabe = tiernameAusgabe.split('')
          tiernameAusgabe[i] = userEingabe.toUpperCase();
        } else {
            tiernameAusgabe = tiernameAusgabe.split('')
            tiernameAusgabe[i] = userEingabe.toLowerCase();
        }
        tiernameTemp = tiernameTemp.split('')
        tiernameTemp[i] = '-';
        tiernameTemp = tiernameTemp.join('')
        tiernameAusgabe = tiernameAusgabe.join('')
      }
    }
    if(tiernameAusgabe == tiernameGesucht){
        console.log('Herzlichen Glückwunsch! Versuche gebraucht: ', versucheGesamt)
        versuche = 0;
    }
}
console.log(tiernameAusgabe, 'Versuche:', versuche + 1);
console.log(buchstabenListe);
}
if(tiernameAusgabe != tiernameGesucht){
console.log('leider verloren')
}
