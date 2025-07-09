let teaFlavours = ["green tea", "black tea", "oolong tea"]

const firsttea = teaFlavours[2]
// console.log(firsttea);


let cities = ["London", "Tokyo", "paris", "New York"];

const favoriteCity = cities[2]

// console.log(favoriteCity);

let teaTypes = ["herbal tea", "white tea", "masala chai"]



// console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berline");

// console.log(citiesVisited);


let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]

const lastOrder = teaOrders.pop()

// console.log(lastOrder);
// console.log(teaOrders);


let popularTeas = ["green tea", "oolong tea", "chai"]

let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

let topCities = ["Berline", "Singapore", "New York"]

let hardCopyCities = [...topCities]

// let hardCopyCities = topCities.slice();
topCities.pop();

// console.log(hardCopyCities);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);


let teaMenu = ["masala tea", "oolong tea", "green tea", "earl tea"];

const menuLength = teaMenu.length;

// console.log(menuLength);


let cityBucketList = ["kyoto", "london","cape town", " vancouver"];

isLondonInList = cityBucketList.includes("London");

// console.log(isLondonInList);

let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));


