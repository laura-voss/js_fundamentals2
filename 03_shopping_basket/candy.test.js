const Candy = require('./candy');

describe('Candy', () => {
  const candy = new Candy("Mars", 4.99);

  describe('.getName', () => {
    it('returns the name of the candy', () => {
      expect(candy.getName()).toEqual('Mars')
    });
  })

  describe('.getPrice', () => {
    it('returns the price of the candy', () => {
      expect(candy.getPrice()).toEqual(basket.sum)
    });
  });
});
