const ShoppingBasket = require('./shoppingBasket');

const mars = { name: "Mars", price: 4.99 };
const skittles = { name: "Skittles", price: 10.99 };

describe('ShoppingBasket', () => {
  describe('.addItem', () => {
    it('adds item to the basket', () => {
      const basket = new ShoppingBasket();
      basket.addItem(mars);
      expect(basket.basket[0]).toEqual(mars)
    });
  });
  
  describe('.getTotalPrice', () => {
    it('initializes new basket as empty basket', () => {
      const basket = new ShoppingBasket();
      expect(basket.getTotalPrice()).toEqual(0)
    });

    it('returns the total price of the basket', () => {
      const basket = new ShoppingBasket();
      basket.addItem(mars);
      basket.addItem(skittles);
      expect(basket.getTotalPrice()).toEqual(15.98)
    });
  });
});
