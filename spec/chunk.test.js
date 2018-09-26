const _ = require('lodash');

describe('chunk', () => {
  const chunk = require('../src/chunk');
  let array;
  beforeEach(() => {
    array = [0, 1, 2, 3, 4, 5];
  });

  it('should return chunked arrays', () => {
    expect(chunk(array, 3)).toBe(_.chunk(array, 3));
  });

  it("'should treat falsey `size` values, except `undefined`, as `0`", () => {
    expect(chunk(array, false)).toBe(_.chunk(array, false));
  });

  it('should coerce `size` to an integer', () => {
    expect(chunk(array, array.length / 4)).toBe(
      _.chunk(array, array.length / 4)
    );
  });
});
