import { SetNameAction } from './nameActionTypes';

export const setName = (value: string): SetNameAction => {
  return { type: 'SET_NAME', payload: value };
};
