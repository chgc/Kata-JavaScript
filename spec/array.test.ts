import * as array from '../src/array';
describe('array', () => {
  let data;
  beforeEach(() => {
    data = [0, 1, 2, 3, 4, 5];
  });

  it('取得只有奇數的陣列資料', () => {
    expect(array.onlyOddNumber(data)).toEqual([1, 3, 5]);
  });

  it('取得中間 2 位的資料', () => {
    expect(array.takeMiddleNumer(data, 2)).toEqual([2, 3]);
    expect(array.takeMiddleNumer(data, 3)).toEqual([2, 3, 4]);
    expect(array.takeMiddleNumer(data, 4)).toEqual([1, 2, 3, 4]);
  });

  it('取最大值', () => {
    const mockData = [3, 5, -1, 39, 1, 4, 97, 42, 33];
    expect(array.getMaxNumber(mockData)).toEqual(97);
  });
});
