import { useState } from "react";
import { HeadersChild } from "../Headers/HeadersChild";
import { Table } from "../Table";

export function TaskInputs(props) {
    const [initVal, setChangeVal] = useState();
    const [clickVal, setClickVal] = useState([]);

    let initialValue = props.initialValue;

    function changeHandler(e) {
        setChangeVal(e.target.value);
    }
    function clickButtonHandler() {
        let temp = {
            input: initVal,
            id: clickVal.length + 1,
        }
        let newVals = [...clickVal, temp];
        setClickVal(newVals);
    }
    

    return <>
        <div>
            <div className="flex mt-5">
                <input
                    className="placeholder-gray-600 bg-white px-5 py-3 rounded-l-md"
                    type="text"
                    name="tasks"
                    placeholder="Enter Task"
                    onChange={changeHandler}
                />
                <select className="text-black bg-white px-5 py-3">
                    {
                        initialValue.map((value, index) => {
                            return <option>{value.name}</option>
                        })
                    }
                </select>
                <button
                    className="text-white px-5 py-3 rounded-r-md bg-purple-600"
                    onClick={clickButtonHandler}
                >
                    Mention
                </button>
            </div>
            <HeadersChild>List of tasks</HeadersChild>
            <Table clickVal={clickVal} />
        </div>
    </>
}