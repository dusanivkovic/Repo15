// Only change code below this line
const product = (...ar) => {
    const args = [...ar];
// Only change code above this line
    return args.reduce((a, b) => a * b, 1);
}
console.log(product(1, 2));
console.log(product(4, 3, 10, 2));
console.log(product(7));// Change this line
console.log(product());
module.exportS = product;