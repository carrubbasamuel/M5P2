import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    bookArray: [],
    bookGenre: "Choose a category",
    originalBookArray: [], // Aggiungi un campo per mantenere il valore originale dell'array
    asin: "",
    StateHideCarousel: false
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.bookGenre = action.payload;
        },
        setBookArray: (state, action) => {
            state.bookArray = action.payload;
            state.originalBookArray = action.payload; // Salva il valore originale dell'array
        },
        setAsin: (state, action) => {
            state.asin = action.payload;
        },
        setSearch: (state, action) => {
            const searchQuery = action.payload;
            searchQuery === "" ? state.StateHideCarousel = false : state.StateHideCarousel = true;
            state.bookArray = state.originalBookArray.filter((book) => {
                return book.title.toLowerCase().includes(searchQuery);
            });

        },
        setSelect: (state, action) => {
            const bookSelected = state.bookArray.find((book) => book.asin === state.asin);
            if (bookSelected) {
                bookSelected.isSelected = action.payload;
            }
        }
    },
});



export const {

    setCategory,
    setBookArray,
    setSearch,
    setSelect,
    setAsin

} = bookSlice.actions;

export default bookSlice.reducer;
