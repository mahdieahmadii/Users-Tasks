import './App.css';
import { Headers } from './Components/Headers';
import { Inputs } from './Components/Inputs';
import { HeadersChild } from './Components/Headers/HeadersChild';
import { Rows } from './Components/Rows';
import { useState } from 'react';
import { handleUsersReducer } from './reducers/handleUsersReducer';
import { useReducer } from 'react';

function App() {
  const [value, setChangeValue] = useState();
  const [state, dispatch] = useReducer(handleUsersReducer, { text: [] });

  function inputChangeHandler(e) {
    setChangeValue(e.target.value);
  }

  return (
    <div className="flex">
      <div className="w-30">
        <Headers>Users</Headers>
        <HeadersChild>Add Users</HeadersChild>
        <Inputs placeholder="Enter User" name="userName" className="purple-600" onChange={inputChangeHandler} onClick={() =>
          dispatch({
            type: "ADD",
            payload: { name: value, id: state.text.length + 1 },
          })
        }>Add</Inputs>
        <HeadersChild>List of users</HeadersChild>
        <Rows initialValue={state.text} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
