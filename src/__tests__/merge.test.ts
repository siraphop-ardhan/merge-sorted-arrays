import { merge } from '../merge';

describe('merge()', () => {
  test('merges three sorted arrays (asc, desc, asc)', () => {
    const c1 = [1, 3, 5];
    const c2 = [6, 4, 2]; // descending
    const c3 = [7, 9, 10];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10]);
  });

  test('handles empty collections', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
  });
});
