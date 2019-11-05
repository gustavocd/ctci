// Time: O(n)
// Space: O(1)
function stringCompression(str: string) {
  let result = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (areEquals(str, i)) {
      counter += 1;
    } else {
      result += str[i] + counter;
      counter = 1;
    }
  }
  return result.length >= str.length ? str : result;
}

function areEquals(str: string, i: number) {
  return str[i] === str[i + 1];
}

export default stringCompression;
