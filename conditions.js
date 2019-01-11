console.log(myUser === "Nizar" || myUser === "Abi");
// console.log(false || myUser === "Abi");
// console.log(false || false);
// console.log(false);

console.log(myCountry === "US" && myAge >= 21);
// console.log(true && myAge >= 21);
// console.log(true && true);
// console.log(true);

var myUser = "Blah";
var myCountry = "France";
var myAge = 50;

if (myCountry === "France") {
  console.log("Baguette is very important");
} else if (myCountry === "UK") {
  console.log("Fine, leave, we don't care.");
} else if (myCountry === "Puerto Rico") {
  console.log("Plantains are life.");
} else {
  console.log("You underappreciate bread and plantains.");
}

// -----------------------------------------------------------------

var language = prompt("What's your preferred language?");
var lowerCased = language.toLowerCase();

if (lowerCased === "french") {
  console.log("Bonjour, le monde !");
} else if (lowerCased === "spanish") {
  console.log("¡Hola, mundo!");
} else {
  console.log("Hello, world!");
}

switch (lowerCased) {
  case "french":
    console.log("Bonjour, le monde !");
    break;

  case "spanish":
    console.log("¡Hola, mundo!");
    break;

  default:
    console.log("Hello, world!");
    break;
}
