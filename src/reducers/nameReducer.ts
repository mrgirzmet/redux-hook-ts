import { NameActions } from '../actions/nameActionTypes';

type NameState = {
  name: string;
};
const initialState: NameState = {
  name: '',
};
const NameReducer = (
  state: NameState = initialState,
  action: NameActions
): NameState => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
export default NameReducer;
