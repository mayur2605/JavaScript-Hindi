// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum = sum + i;
//   i++
  
// }

// console.log(sum);

// let countdowsn = [];

// let i = 5;

// while (i > 0) {
//   countdowsn.push(i);
//   i--;
// }

// console.log(countdowsn);

let teaCollection = [];
let tea;

do {
  tea = prompt(`"Enter your febourite tea "`)

  if (tea !== "stop") {
    teaCollection.push(tea)
  }
} while (tea != "stop");
