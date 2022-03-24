let user = { name: 'David' }
let card = { amount: 7, product: "Bar", unitprice: 42}
let message = "Hello " + user.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";
console.log(message);