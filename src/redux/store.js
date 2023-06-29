import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/ModeState";
import bookReducer from "./reducers/bookAction";
import reviewReducer from "./reducers/review";



const rootReducer = combineReducers({   
    book: bookReducer,
    review: reviewReducer,
    modeRedux: modeReducer,
});


const store = configureStore({
    reducer: {
        root: rootReducer,
    },
});


export default store;