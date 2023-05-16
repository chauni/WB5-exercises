
// Exercise 1
let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO:  fill the array with 10 candies of various
    //        price ranges
 ];

 console.log('Candies that are under $4.00')
 const candyUnder4 = products.filter((candy) => candy.price < 4.00);
 candyUnder4.forEach((candy) => {
    console.log(candy.price, candy.product)
 })

 console.log(' ');

 console.log('Candy that includes M&Ms in its name:')
 const candySameName = products.filter((candy) => candy.product.includes('M&Ms'));
 candySameName.forEach((candy) => {
    console.log(candy.product)
 })

 console.log(' ');

 console.log('Do we carry Swedish Fish')
 const haveSwedishFish = products.find((candy) => candy.product == 'Swedish Fish')
 if (haveSwedishFish) {
    console.log('Yes, we have Swedish Fish')
 } else {
    console.log('No')
 }



