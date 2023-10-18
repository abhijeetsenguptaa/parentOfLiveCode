let firstName = "Abhijeet";
let lastName = "Sengupta";

let completeName = firstName + " " + lastName
console.log(completeName)   //Printing the full Name


const reversName = completeName.split(' ').reverse().join(' ');
console.log(reversName);  // Printing the full name in reverse order

let result = '';
for (let i = completeName.length - 1; i >= 0; i--) {
    result += completeName[i]
}

console.log(result); // Printing the name in complete reverse order.


