const first = [1, 2, 3];
const second = [4, 5, 6];

var compined1 = first.concat(second);
var compined2 = [...first, 'a', ...second, 'b'];

console.log(compined1);
console.log(compined2);

const firstObject = {name: "Raouf"};
const secondObject = {job : "Developer"};

const combined3 = {...firstObject, ...secondObject};

console.log(combined3);