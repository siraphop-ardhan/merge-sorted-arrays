export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const rev2 = [];
  for (let i = collection_2.length - 1; i >= 0; i--) {
    rev2.push(collection_2[i]);
  }

  const merged: number[] = [];
  let i = 0, j = 0, k = 0;
  while (i < collection_1.length || j < rev2.length || k < collection_3.length) {
    const values = [
      i < collection_1.length ? collection_1[i] : Infinity,
      j < rev2.length ? rev2[j] : Infinity,
      k < collection_3.length ? collection_3[k] : Infinity
    ];
    const min = Math.min(...values);
    merged.push(min);
    if (min === values[0]) i++;
    else if (min === values[1]) j++;
    else k++;
  }

  return merged;
}
