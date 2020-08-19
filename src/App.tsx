import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { AppState } from './reducers/rootReducer';
import { CountActions } from './actions/countActionTypes';
import { NameActions } from './actions/nameActionTypes';
import { setName } from './actions/nameActions';
import { incrementCount, decrementCount } from './actions/incrementActions';

// interface MyProps {}

const App: React.FC = ({}) => {
  const { count } = useSelector((state: AppState) => state.count);
  const { name } = useSelector((state: AppState) => state.name);
  const countDispatch = useDispatch<Dispatch<CountActions>>();
  const nameDispatch = useDispatch<Dispatch<NameActions>>();
  const handleIncrement = (): void => {
    countDispatch(incrementCount());
  };
  const handleDecrement = (): void => {
    countDispatch(decrementCount());
  };
  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    nameDispatch(setName(e.target.value));
  };
  return (
    <div>
      <div>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          +
        </Button>
        {count}
        <Button variant="contained" color="primary" onClick={handleDecrement}>
          -
        </Button>
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={handleSetName}
        />
        {name}
      </div>
    </div>
  );
};
export default App;
