import checkPermutation from '../../ch1/checkPermutation';

test.each([
  ['abcdefghi', 'ihgfedcba'],
  ['1a1', 'a11'],
  ['1234567812345678', '8877665544332211'],
  ['icarraci', 'carcarii'],
])(
  'should return true when calling .checkPermutation(%s, %s)',
  (str, str2) => {
    expect(checkPermutation(str, str2)).toBe(true);
  }
);

test.each([
  ['abcdefghiz', 'ihgfedcbaa'],
  ['1a1', '11'],
  ['1122334455667788', '9911223344556677'],
  ['45678', '1239'],
])(
  'should return false when calling .checkPermutation(%s, %s)',
  (str, str2) => {
    expect(checkPermutation(str, str2)).toBe(false);
  }
);
