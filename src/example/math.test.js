import { describe, it, expect } from 'vitest';
import { add } from './math.js';

describe('add()', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
