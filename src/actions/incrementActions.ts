import { IncrementCountAction, DecrementCountAction } from './countActionTypes';

export const incrementCount = (): IncrementCountAction => {
  return { type: 'INCREMENT' };
};
export const decrementCount = (): DecrementCountAction => {
  return { type: 'DECREMENT' };
};
