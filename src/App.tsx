import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './reducers/rootReducer';
import { CountActions } from './actions/countActions';
import { NameActions } from './actions/nameActions';

// interface MyProps {}

const App: React.FC = ({}) => {
  const { count } = useSelector((state: AppState) => state.count);
  const { name } = useSelector((state: AppState) => state.name);
  const countDispatch = useDispatch<Dispatch<CountActions>>();
  const nameDispatch = useDispatch<Dispatch<NameActions>>();
  const handleIncrement = (): void => {
    countDispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = (): void => {
    countDispatch({ type: 'DECREMENT' });
  };
  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    nameDispatch({ type: 'SET_NAME', payload: e.target.value });
  };
  return (
    <div>
      <div>
        <button type="submit" onClick={handleIncrement}>
          +
        </button>
        {count}
        <button type="submit" onClick={handleDecrement}>
          -
        </button>
      </div>
      <div>
        <input type="text" onChange={handleSetName} />
        {name}
      </div>
    </div>
  );
};
export default App;
