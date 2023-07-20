const prompt = require("prompt-sync")({ sigint: true });

exit = false;
do {
  var random = Math.floor(Math.random() * 100);

  console.log("Zahlenraten: Gesuchte Zahl liegt zwischen 0 und 100");
  for (let i = 7; i > 0; i--) {
    let zahl = prompt("bitte Zahl eingeben: ");
    if (isNaN(zahl)) {
      console.log(
        "!du doppel-looser, keine Buchstaben!!! Versuche verbleibend: ", i);
    } else if (zahl < 1 || zahl > 99) {
      console.log(
        "!du doppel-looser, zwischen 0 und 100!!! Versuche verbleibend: ", i);
    } else if (zahl == random) {
      console.log("Herzlichen Glückwunsch! Versuch: ", i);
      i = 0;
    } else {
      console.log("!du looser. Versuche verbleibend: ", i);
    }
  }
  while (true) {
    const newGame = prompt("erneut spielen? (Y/N)").toLowerCase();
    if (newGame == "y") {
      exit = false;
      break;
    } else if (newGame == "n") {
      exit = true;
      break;
    } else {
      console.log("falsche Eingabe");
      continue;
    }
  }
} while (!exit);
