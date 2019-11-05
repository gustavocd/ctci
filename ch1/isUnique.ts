function isUnique(str: string) {
  if (!str || str.length === 1) {
    return true;
  }
  // In case you don't consider case sensitive
  const strNormalized = str;
  // const strNormalized = str.toLowerCase();
  const letters = {};
  for (const letter of strNormalized) {
    if (letters[letter]) {
      return false;
    }
    letters[letter] = 1;
  }
  return true;
}

export default isUnique;
