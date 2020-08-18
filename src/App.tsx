import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './reducers/rootReducer';
import { CountActions } from './actions/countActions';
import { NameActions } from './actions/nameActions';
function App() {
    const { count } = useSelector((state: AppState) => state.count);
    const { name } = useSelector((state: AppState) => state.name);
    const countDispatch = useDispatch<Dispatch<CountActions>>();
    const nameDispatch = useDispatch<Dispatch<NameActions>>();
    const handleIncrement = () : void => {
        countDispatch({type: 'INCREMENT'});
    }
    const handleDecrement = () : void => {
        countDispatch({type: 'DECREMENT'});
    }
    const handleSetName = 
        (e: React.ChangeEvent<HTMLInputElement>) : void => {
        nameDispatch({type: 'SET_NAME', payload: e.target.value})
    }
    return (
        <div>
            <div>
                <button onClick={handleIncrement}>+</button>
                {count}
                <button onClick={handleDecrement}>-</button>
            </div>
            <div>
                <input type="text" onChange={handleSetName}/>
                {name}
            </div>
        </div>
    );
}
export default App;