import {Dispatch} from "redux";
import {AppStateType} from "./store";

const initialState = {
    value: 1000
}

type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-COUNTER":
            return {
                ...state, value: state.value + 1
            }
            case "SET-VALUE-LOCAL-STORAGE":
                return {
                    ...state, value: state.value
                }
        default:
            return state
    }

}

type ActionType = IncValuesType | SetValueFromLocalStorageType;

export type IncValuesType = ReturnType<typeof incCounterValueAC>
export const incCounterValueAC = () => ({type: 'INC-COUNTER'} as const);

export type SetValueFromLocalStorageType = ReturnType<typeof setValuesFromLocalStorageAC>
export const setValuesFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-LOCAL-STORAGE', value} as const);

//THUNK

export const incValuesTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
    let currentValue = getState().counter.value
    localStorage.setItem('counterValue', JSON.stringify(currentValue + 1))
    dispatch(incCounterValueAC())
}

export const setValuesFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(setValuesFromLocalStorageAC(newValue))
    }
}