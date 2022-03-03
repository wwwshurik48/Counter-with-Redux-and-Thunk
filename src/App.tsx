import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    incCounterValueAC,
    incValuesTC,
    setValuesFromLocalStorageAC,
    setValuesFromLocalStorageTC
} from "./bll/reducer-counter";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setValuesFromLocalStorageTC())
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
