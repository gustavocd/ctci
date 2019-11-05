function checkPermutation(str:string, str2: string) {
  const areEmpty = !str && !str2;
  if (areEmpty) {
    return true;
  }
  const notHaveSameLength = str.length !== str2.length;
  if (notHaveSameLength) {
    return false;
  }
  return areEqual(str, str2);
}

function areEqual(str: string, str2: string) {
  return str.split('').sort().join('') === str2.split('').sort().join('');
}

export default checkPermutation;
