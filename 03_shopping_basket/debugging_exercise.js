class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }

  addItem(item) {
    this.basket.push(item);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket;


const Candy = require('./candy');
const candy = new Candy('Mars', 4.99);

const basket = new ShoppingBasket();

// basket.addItem(candy);
// basket.getTotalPrice();
