//Point 1
console.log("Hello");
// Point 2
var PersonName = "Usman Iqbal";
console.log("How Are you ", PersonName, "? would you like to learn some Python today?");
//Point 3 Bys use the same varibale for person name as use in point 2 
console.log("To Upper Case: ", PersonName.toUpperCase(), " To Lower case: ", PersonName.toLowerCase(), "To Tittle case: ");
// point 4
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
// Point 5 
var famous_person = "Usman Iqbal";
var message = "“A person who never made a mistake never tried anything new.”";
console.log(famous_person, "once said,", message);
// Point 6
var Personname = "Usman Iqbal";
console.log("\t", Personname, "\n", Personname);
// Point 7,8
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(32 / 4);
// Point 9
var Favorite_Number = 19;
console.log("My Favorite Number is ", Favorite_Number);
// Point 10 
//Comments are already added for each point 
//Point 11 
var names = ["Usman", "Ali", "Kaleem", "Husnain", "Nasir"];
names.forEach(function (x) {
    console.log(x);
});
// Point 12
names.forEach(function (x) {
    console.log(x, " is my Frien.");
});
// Point 13
var ModeOfTransportation = ["Airplane", "Train", "Motor Bike", "Bus"];
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
var guestList = ["Usman", "Ali", "Kaleem", "Husnain", "Nasir"];
// Point 15
var listOfGuestCantAttend = [];
var indexOfUnableToAttend = guestList.indexOf("Kaleem");
if (indexOfUnableToAttend !== -1) {
    listOfGuestCantAttend.push(guestList[indexOfUnableToAttend]);
    guestList[indexOfUnableToAttend] = "Yasir";
}
printInvitations(guestList);
// Point 16
console.log("We found a bigger dinner table!");
guestList.unshift("Zeeshan");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Asif");
guestList.push("Sohail");
console.log("Updated Guest List:");
printInvitations(guestList);
function printInvitations(guests) {
    guestList.forEach(function (x) {
        var invitation = "Dear ".concat(x, ", you are cordially invited to dinner. Please join us on Saturday at 7 PM.");
        console.log(invitation);
    });
}
//Point 17
while (guestList.length > 2) {
    console.log("Dear ".concat(guestList[guestList.length - 1], ", We are Sorry we can not invite you. Thanks For understand."));
    guestList.pop();
}
printInvitations(guestList);
var newname = names.sort(function (a, b) { return b.localeCompare(a); });
console.log(newname);
console.log(names.sort(function (a, b) { return a.localeCompare(b); }));
