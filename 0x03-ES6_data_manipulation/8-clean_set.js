export default function cleanSet(set, substring) {
  const array = [];
  if ((set instanceof Set) && (substring.length !== 0)) {
    for (const element of set) {
      if (element.startsWith(substring)) {
        const stripped = element.slice(substring.length);
        array.push(stripped);
      }
    }
  }
  const concate = array.join('-');
  return concate;
}
