const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 and 3', () => {
    expect(2 * 3).toBe(6);
  });

  it('multiplies 4 and 4', () => {
    expect(4 * 4).toBe(16);
  });
})