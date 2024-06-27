const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Retourne votre entrée. Entrez 'exit' pour quitter le programme.");
rl.on("line", (line) => {
  if (line.toLowerCase() === "exit") {
    console.log("Au revoir !");
    rl.close();
  } else {
    console.log(line);
  }
});
