const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askLine() {
  rl.question("Ecrivez la ligne que vous souhaitez afficher : ", (line) => {
    if (line === "exit") {
      rl.close();
    } else {
      console.log(line);
      askLine(); // Rappel récursif pour demander une nouvelle ligne
    }
  });
}

askLine(); // Démarrage de la boucle
