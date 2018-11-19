/*
 * Hello. 2 points.
 */

function hello() {

  document.getElementById("output1").innerHTML = "Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  var retVal = prompt("Enter Your Name Please : ", "Your Name");
  document.getElementById("output2").innerHTML = ("Hello, " + retVal + "!");

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var cel1 = cels * (9/5);
  var cel2 = cel1 + 32;
  var cel3 = cel2.toFixed(2);
  document.getElementById("output3").innerHTML = (cels + " " + "degrees Celsius equals"
  + " " + cel3 + " " + "degrees Fahrenheit.");

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */
function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  var fahr1 = fahr - 32;
  var fahr2 = fahr1 * (5/9);
  var fahr3 = fahr2.toFixed(2);
  document.getElementById("output4").innerHTML = (fahr + " " + "degrees Fahrenheit equals"
  + " " + fahr3 + " " + "degrees Celsius.");

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let miles = Math.floor(inches/63360);
  inches = inches%63360;
  let yards = Math.floor(inches/36);
  inches = inches%36;
  let feet = Math.floor(inches/12);
  inches = inches%12;
  let rInches = Math.floor(inches/1);
  inches = inches%1;
  document.getElementById('output5').innerHTML =
  `Miles: ${miles} <br/> Yards: ${yards} <br/> Feet: ${feet} <br/> Inches: ${rInches}`;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
