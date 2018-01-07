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
  let l = cart.length;
  var s = "In your cart, you have "
while(!cart.lenth){
  switch (l) {

    case (l === 1):
      return s += `${cart[0]} at $${cart[0][0]}.`;
      break;

    case (l >1 ):
    var c = 1;

      for (var i = 0; i < cart.length; i++ ,  c< l-1) {
        s += `${cart[i]} at $${cart[i][i]},`
        c++;
      }
      return s += ` and ${cart[l-1]} at $${cart[l-1][l-1]}.`;

      break;

  }

}
return "Your shoppping cart is empty.";
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
