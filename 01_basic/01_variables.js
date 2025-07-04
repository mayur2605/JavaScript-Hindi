const accoundId = 144553
let accountEmail = "mayur@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;
// accoundId = 2 not allowed

console.log(accoundId);

accountEmail ="mk@gmail.com"
accountPassword ="21211"
accountCity = "Pune"

/*
Prefer  not to use
Because of issue in block scope  adn functional scope
*/

console.table([accoundId, accountEmail, accountCity, accountState])