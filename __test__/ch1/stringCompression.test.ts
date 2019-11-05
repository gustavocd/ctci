import stringCompression from '../../ch1/stringCompression';

test.each([
  ['aaa', 'a3'],
  ['bbbbbb', 'b6'],
  ['hhellllllllooooo!', 'h2e1l8o5!1'],
  ['aabcccccaaa', 'a2b1c5a3'],
])(
  'should return true when calling .stringCompression(%s)',
  (str, str2) => {
    expect(stringCompression(str)).toEqual(str2);
  }
);

test.each([
  'a',
  'aa',
  'abc',
  'aabbcc',
  'ababababccab'
])(
  'should return same value when doesn\'t use less space',
  (str) => {
    expect(stringCompression(str)).toBe(str);
  }
);
