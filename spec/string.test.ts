import * as string from '../src/string';
describe('string', () => {
  describe('padLeft', () => {
    it('文字-左邊填0', () => {
      expect(string.padLeft('demo', 8, '0')).toEqual('0000demo');
    });

    it('數字', () => {
      expect(string.padLeft('123', 8, '0')).toEqual('00000123');
    });
  });

  describe('padRight', () => {
    it('文字-右邊填0', () => {
      expect(string.padRight('demo', 8, '0')).toEqual('demo0000');
    });

    it('數字', () => {
      expect(string.padRight('123', 8, '0')).toEqual('12300000');
    });
  });
});
