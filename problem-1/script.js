"use strict";


function calculateCtoF(tempC) {
  let c = Number(tempC) 
  let F = (c * 9) / 5 + 32;
  document.write("The Temperature you entered in Fahrenheit is  " + F);
}
calculateCtoF(prompt("What temperature is it?"));

