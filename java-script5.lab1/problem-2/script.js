"use strict";

// Age Verification:
// Write a program that asks the user to input their age.
// Determine if the user is a minor, an adult, or a senior citizen.
// Display the previous determination.

let age = prompt("What is your age?");

if (age <= 17) {
  alert("You are classified as a minor.");
} else if (age >= 18 && age <= 50) {
  alert("You are classified as an adult.");
} else if (age >= 51) {
  alert("You are classified as a senior");
} else {
  alert("invalid");
}
