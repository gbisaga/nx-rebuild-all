import * as index from '../lib/index';

describe('Sample test for package 3', () => {
  test('NAME is present', () => {
    expect(index.NAME).not.toBeUndefined;
  });
  test('NAME matches', () => {
    expect(index.NAME).toEqual('package3');
  });
});
