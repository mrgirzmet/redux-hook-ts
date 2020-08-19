import '@testing-library/jest-dom/extend-expect';
import { setName } from './nameActions';

const testValue = 'TEST VALUE 1';
describe('SetName Actions Test', () => {
  it('SetName should fire setName Action State', () => {
    expect(setName(testValue)).toEqual({
      type: 'SET_NAME',
      payload: testValue,
    });
  });
});
