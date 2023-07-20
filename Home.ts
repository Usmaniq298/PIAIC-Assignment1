//Point 1
console.log("Hello");

// Point 2
var PersonName: string = "Usman Iqbal";
console.log(
  "How Are you ",
  PersonName,
  "? would you like to learn some Python today?"
);

//Point 3 Bys use the same varibale for person name as use in point 2
console.log(
  "To Upper Case: ",
  PersonName.toUpperCase(),
  " To Lower case: ",
  PersonName.toLowerCase(),
  "To Tittle case: "
);

// point 4
console.log(
  "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
);

// Point 5
var famous_person: string = "Usman Iqbal";
var message: string =
  "“A person who never made a mistake never tried anything new.”";
console.log(famous_person, "once said,", message);

// Point 6
var Personname: string = "Usman Iqbal";
console.log("\t", Personname, "\n", Personname);

// Point 7,8
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(32 / 4);

// Point 9
var Favorite_Number: number = 19;
console.log("My Favorite Number is ", Favorite_Number);

// Point 10
//Comments are already added for each point

//Point 11
var names: string[] = ["Usman", "Ali", "Kaleem", "Husnain", "Nasir"];
names.forEach((x) => {
  console.log(x);
});

// Point 12
names.forEach((x) => {
  console.log(x, " is my Friend.");
});

// Point 13
var ModeOfTransportation: string[] = ["Airplane", "Train", "Motor Bike", "Bus"];

for (var i = 0; i < ModeOfTransportation.length; i++) {
  var sentence;

  switch (ModeOfTransportation[i]) {
    case "Airplane":
      sentence = "I love flying in airplanes!";
      break;
    case "Train":
      sentence = "Taking a train ride is always an adventure.";
      break;
    case "Motor Bike":
      sentence = "Riding a motorbike makes me feel free.";
      break;
    case "Bus":
      sentence = "Buses are a convenient way to get around the city.";
      break;
    default:
      sentence = "I enjoy traveling by " + ModeOfTransportation[i] + ".";
      break;
  }
  console.log(sentence);
}

// Point 14
var guestList: string[] = ["Usman", "Ali", "Kaleem", "Husnain", "Nasir"];
var allGuestList: string[] = guestList;
// Point 15

var listOfGuestCantAttend: string[] = [];
var indexOfUnableToAttend: number = guestList.indexOf("Kaleem");
if (indexOfUnableToAttend !== -1) {
  listOfGuestCantAttend.push(guestList[indexOfUnableToAttend]);
  guestList[indexOfUnableToAttend] = "Yasir";
  allGuestList.push(guestList[indexOfUnableToAttend]);
}
printInvitations(guestList);

// Point 16

console.log("We found a bigger dinner table!");

guestList.unshift("Zeeshan");

const middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Asif");

guestList.push("Sohail");

console.log("Updated Guest List:");
printInvitations(guestList);

function printInvitations(guests: string[]): void {
  guestList.forEach((x) => {
    const invitation: string = `Dear ${x}, you are cordially invited to dinner. Please join us on Saturday at 7 PM.`;
    console.log(invitation);
  });
  guestList.forEach((x) => {
    var found: boolean = false;
    allGuestList.forEach((y) => {
      if (y == x) {
        found = true;
      }
    });
    if (!found) {
      allGuestList.push(x);
    }
  });
}

//Point 17
console.log("We are Sorry, We can invite only two people for dinner! ");
while (guestList.length > 2) {
  console.log(
    `Dear ${
      guestList[guestList.length - 1]
    }, We are Sorry we can not invite you. Thanks For understand.`
  );
  guestList.pop();
}

printInvitations(guestList);

// Point 18

var listOfPlace: string[] = [
  "Al-Aqsa Mosque",
  "Giza Necropolis",
  "Aswan",
  "Kashmir",
  "Aya sophia",
];

console.log(listOfPlace);
console.log([...listOfPlace].sort());

console.log(listOfPlace);
console.log([...listOfPlace].sort().reverse());

listOfPlace.reverse();
console.log(listOfPlace);

listOfPlace.reverse();
console.log(listOfPlace);

listOfPlace.sort((a, b) => a.localeCompare(b));
console.log(listOfPlace);

listOfPlace.sort((a, b) => b.localeCompare(a));
console.log(listOfPlace);

// Point 19
console.log(allGuestList);

// Point 20
var language: string[] = ["C#", "Javascript", "TypeScript", ".Net", "React"];

// Point 21
type languagesObj = {
  name: string;
};
var objLanguage: languagesObj[] = [
  {
    name: "C#",
  },
  {
    name: "JavaScript",
  },
];

// Point 23
let car: string = "subaru";

console.log("Is car == 'subaru'? I predict true.");
console.log(car == "subaru");

console.log("Is car == 'ford'? I predict false.");
console.log(car == "ford");

console.log("Is car != 'honda'? I predict true.");
console.log(car != "honda");

console.log("Is car != 'subaru'? I predict false.");
console.log(car != "subaru");

console.log("Is car === 'subaru'? I predict true.");
console.log(car === "subaru");

console.log("Is car === 'Subaru'? I predict false.");
console.log(car === "Subaru");

console.log("Is car !== 'toyota'? I predict true.");
console.log(car !== "toyota");

console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== "subaru");

console.log("Is car > 'ford'? I predict true.");
console.log(car > "ford");

console.log("Is car < 'audi'? I predict false.");
console.log(car < "audi");

// Point 25

// Tests for equality and inequality with strings
let myName: string = "Usman";
console.log("Is name equal to 'Usman'? I predict true.");
console.log(myName == "Usman");

console.log("Is name not equal to 'Usman'? I predict true.");
console.log(myName != "Iqbal");

// Tests using the lowercase function
let myMessage: string = "HELLO";
console.log("Is message in lowercase equal to 'hello'? I predict true.");
console.log(myMessage.toLowerCase() == "hello");

// Numerical tests
let x: number = 5;
let y: number = 10;

console.log("Is x less than y? I predict true.");
console.log(x < y);

console.log("Is x greater than or equal to 5? I predict true.");
console.log(x >= 5);

console.log("Is x + y equal to 15? I predict true.");
console.log(x + y == 15);

// Tests using "and" and "or" operators
let isSunny: boolean = true;
let isWarm: boolean = false;

console.log("Is it sunny and warm? I predict false.");
console.log(isSunny && isWarm);

console.log("Is it sunny or warm? I predict true.");
console.log(isSunny || isWarm);

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes("apple"));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict true.");
console.log(!fruits.includes("grape"));

// Point 26
let alien_color: string = "green";

if (alien_color === "green") {
  console.log("Congratulations! You just earned 5 points.");
}
