import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    incValuesTC, setValueFromLocalStorageTC
} from "./bll/reducer-counter";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    debugger
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setValueFromLocalStorageTC())
    }, [])

    const incHandler = () => {
        dispatch(incValuesTC())
        // setValue(value + 1)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>INC</button>
        </div>
    );
}

export default App;
