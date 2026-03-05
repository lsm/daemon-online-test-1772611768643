import { describe, it, expect } from 'vitest';
import { triple } from './triple.js';

describe('triple', () => {
  it('returns 0 for 0', () => {
    expect(triple(0)).toBe(0);
  });

  it('returns 3 for 1', () => {
    expect(triple(1)).toBe(3);
  });

  it('returns -3 for -1', () => {
    expect(triple(-1)).toBe(-3);
  });

  it('returns 1.5 for 0.5', () => {
    expect(triple(0.5)).toBe(1.5);
  });
});
