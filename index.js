var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart
 //var item = [];
 var price = Math.floor(Math.random(101) * (100 - 1)) + 1
 var items = {[item]:price}
 //Object.assign(myc, {[name]: price});
 cart.push(items)
 //cart
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  cart;

  var s = "In your cart, you have "
if (!cart.length) {
  console.log( "Your shopping cart is empty.");
}

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
