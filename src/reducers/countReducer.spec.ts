import countReducer from './countReducer';
import { incrementCount } from '../actions/incrementActions';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(countReducer({ count: 0 }, incrementCount())).toMatchObject({
      count: 1,
    });
  });
});
