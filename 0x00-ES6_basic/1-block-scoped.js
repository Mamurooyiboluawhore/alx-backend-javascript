// using const to declare a variable

export default function taskBlock (trueOrFalse) {
  const task = false;
  const task2 = true;
// conditions
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
