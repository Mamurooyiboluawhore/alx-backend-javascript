export default function cleanSet(set, startString) {
  const array = [];
  if ((set instanceof Set) && (startString.length !== 0)) {
    for (const element of set) {
      if (element.startsWith(startString)) {
        const stripped = element.slice(startString.length);
        array.push(stripped);
      }
    }
    const concatString = array.join('-');
    return concatString;
  }
  return '';
}
