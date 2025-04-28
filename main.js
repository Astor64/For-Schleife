"use strict";

//Loops For-Schleife
function main() {
  // Loop

  let names = ["Peter", "Jannick", "Maria"];
  // Die Schleife läuft solange, bis die Bedingung unwahr wird.
  for (let i = 0; i < names.length; i++) {
    console.log(names.length);
    console.log(i);
    console.log("Index:  " + i + "  Name: " + names[i]);
  }
}
