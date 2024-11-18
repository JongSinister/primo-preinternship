export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0,
    k = collection_3.length - 1;
  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const value1 = i < collection_1.length ? collection_1[i] : Infinity;
    const value2 = j < collection_2.length ? collection_2[j] : Infinity;
    const value3 = k >= 0 ? collection_3[k] : Infinity;

    if (value1 <= value2 && value1 <= value3) {
      result.push(value1);
      i++;
    } else if (value2 <= value1 && value2 <= value3) {
      result.push(value2);
      j++;
    } else {
      result.push(value3);
      k--;
    }
  }

  return result;
}
