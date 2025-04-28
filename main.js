"use strict";

//Loops For-Schleife
function main() {
  // Loop

  let revenue = [500, 300, 200, 599, 834, 573, 293, 482];

  let totalRevenue = 0;
  // Die Schleife läuft solange, bis die Bedingung unwahr wird.
  for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i];
    console.log(totalRevenue);
  }

  console.log("Total: " + totalRevenue);
}
