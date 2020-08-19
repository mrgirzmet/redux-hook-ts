import { incrementCount, decrementCount } from './incrementActions';
import '@testing-library/jest-dom/extend-expect';

describe('Count Actions Test', () => {
  it('IncrementCount should increment count state', () => {
    expect(incrementCount()).toEqual({ type: 'INCREMENT' });
  });
  it('DecrementCount should decrement count state', () => {
    expect(decrementCount()).toEqual({ type: 'DECREMENT' });
  });
});
