import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { AuthReducers } from "./reducers/AuthReducers";
import { CongViecReducers } from "./reducers/CongViecReducers";
import { NguoiDungReducers } from "./reducers/NguoiDungReducers";
import { ThueCongViecReducers } from "./reducers/ThueCongViecReducers";
const rootReducer = combineReducers({
    
    //state ứng dụng
    // CongViecReduers: CongViecReducers,
    CongViecReducers,
    AuthReducers,
    ThueCongViecReducers,
    NguoiDungReducers,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
)