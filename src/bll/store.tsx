import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer-counter";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

type AppStoreType = typeof store