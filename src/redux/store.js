import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducers/bookAction";
import reviewReducer from "./reducers/review";
import modeReducer from "./reducers/ModeState";



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