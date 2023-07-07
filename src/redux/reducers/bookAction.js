import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const endpoint = "https://epibooks.onrender.com/"

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async (category) => {
        const response = await fetch(endpoint + category);
        if (response.ok) {
            const books = await response.json();
            return books;
        }
    }
);


const initialState = {
    asin: "",// Aggiungi un campo per memorizzare l'asin del libro selezionato
    bookArray: [],// Aggiungi un campo per memorizzare l'array dei libri fetchati
    bookGenre: "fantasy",// Aggiungi un campo per memorizzare la categoria dei libri
    originalBookArray: [], // Aggiungi un campo per mantenere il valore originale dell'array per la ricerca
    StateHideCarousel: false,//Aggiunto uno stato per nascondere il carousel durante la ricerca
    BookDeteil: [],//Aggiunto uno stato per memorizzare il libro selezionato ed usarlo sulla pagina dettaglio
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.bookGenre = action.payload;
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
        },
        setBookDeteil: (state, action) => {
            state.BookDeteil = state.bookArray.find((book) => book.asin === action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.bookArray = action.payload;
            state.originalBookArray = action.payload; // Salva il valore originale dell'array
        });
    }
});



export const {

    setCategory,// Aggiungi un action creator per settare la categoria dei libri
    setSearch,// Aggiungi un action creator per settare la stringa di ricerca
    setSelect,// Aggiungi un action creator per settare il libro selezionato
    setAsin,// Aggiungi un action creator per settare l'asin del libro selezionato
    setBookDeteil,// Aggiungi un action creator per settare il libro selezionato

} = bookSlice.actions;

export default bookSlice.reducer;
