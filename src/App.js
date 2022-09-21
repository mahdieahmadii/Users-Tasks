import './App.css';
import { Headers } from './Components/Headers';
import { Inputs } from './Components/Inputs';
import { HeadersChild } from './Components/Headers/HeadersChild';
import { Rows } from './Components/Rows';
import { useState } from 'react';

function App() {
  const [value, setChangeValue] = useState();
  const [initialValue, addValue] = useState([]);

  function inputChangeHandler(e) {
    setChangeValue(e.target.value);
  }
  function buttonClickHandler() {
    let temp = {
      text: value,
      id: initialValue + 1,
    }
    let newValues = [...initialValue, temp];
    addValue(newValues);
  }

  return (
    <div className="flex">
      <div className="w-30">
        <Headers>Users</Headers>
        <HeadersChild>Add Users</HeadersChild>
        <Inputs placeholder="Enter User" name="userName" className="purple-600" onChange={inputChangeHandler} onClick={buttonClickHandler}>Add</Inputs>
        <HeadersChild>List of users</HeadersChild>
        <Rows initialValue={initialValue} />
      </div>
    </div>
  );
}

export default App;
