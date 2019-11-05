import isUnique from '../../ch1/isUnique';

test.each([
  'abcdefghi',
  'jklpoiuqwerzxcvmnsadf',
  '1234567890',
  'AaBbCcDdeFg1234567890(*&^%$#@!)'
])(
  'should return true when calling .isUnique(%s)',
  (str) => {
    expect(isUnique(str)).toBe(true);
  }
);

test.each([
  'abcadef',
  'aaaaaaaaaa',
  'abcdefghijklmnopqrstuvwxyza',
  '1234567890asdklf1',
  '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
])(
  'should return false when calling .isUnique(%s)',
  (str) => {
    expect(isUnique(str)).toBe(false);
  }
);
