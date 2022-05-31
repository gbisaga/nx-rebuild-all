import { NAME } from '../lib/index';

describe('Sample test for package 1', () => {
  test('NAME is present', () => {
    expect(NAME).not.toBeUndefined;
  });
  test('NAME matches', () => {
    expect(NAME).toEqual('package1');
  });
});
