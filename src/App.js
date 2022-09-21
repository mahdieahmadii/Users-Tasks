import './App.css';
import { Headers } from './Components/Headers';
import { Inputs } from './Components/Inputs';
import { HeadersChild } from './Components/Headers/HeadersChild';
import { Rows } from './Components/Rows';
import { useState } from 'react';
import { handleUsersReducer } from './reducers/handleUsersReducer';
import { useReducer } from 'react';
import { TaskInputs } from './Components/TaskInputs';

function App() {
  const [value, setChangeValue] = useState();
  const [state, dispatch] = useReducer(handleUsersReducer, { text: [] });

  function inputChangeHandler(e) {
    setChangeValue(e.target.value);
  }

  return (
    <div className="flex">
      <div className="w-30 p-10">
        <Headers>Users</Headers>
        <HeadersChild>Add Users</HeadersChild>
        <Inputs placeholder="Enter User" name="userName" onChange={inputChangeHandler} onClick={() =>
          dispatch({
            type: "ADD",
            payload: { name: value, id: state.text.length + 1 },
          })
        }>Add</Inputs>
        <HeadersChild>List of users</HeadersChild>
        <Rows initialValue={state.text} dispatch={dispatch} />
      </div>
      <div className="w-70 p-10 bg-gray-50">
        <Headers>Tasks</Headers>
        <HeadersChild>Add Tasks</HeadersChild>
        <TaskInputs initialValue={state.text} />
      </div>
    </div>
  );
}

export default App;
