import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducers/bookAction";
import reviewReducer from "./reducers/review";



const rootReducer = combineReducers({   
    book: bookReducer,
    review: reviewReducer,
});


const store = configureStore({
    reducer: {
        root: rootReducer,
    },
});


export default store;