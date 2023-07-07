import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// URL dell'endpoint per le richieste dei libri
const endpoint = "https://epibooks.onrender.com/";

// Funzione asincrona per effettuare la richiesta dei libri
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

// Stato iniziale del modulo book
const initialState = {
  asin: "", // Memorizza l'asin del libro selezionato
  bookArray: [], // Array dei libri fetchati
  bookGenre: "fantasy", // Categoria dei libri
  originalBookArray: [], // Copia dell'array originale per la ricerca
  isSearchMode: false, // Stato per nascondere il carousel durante la ricerca
  BookDetail: [], // Libro selezionato per la pagina dettaglio
  currentPage: 1, // Pagina corrente
  totalPages: 1, // Numero totale di pagine
};

// Slice del modulo book
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      // Imposta la categoria dei libri
      state.bookGenre = action.payload;
    },
    setAsin: (state, action) => {
      // Imposta l'asin del libro selezionato
      state.asin = action.payload;
    },
    setSearch: (state, action) => {
      // Imposta la stringa di ricerca
      const searchQuery = action.payload;
      searchQuery === ""
        ? (state.isSearchMode = false)
        : (state.isSearchMode = true);
      state.bookArray = state.originalBookArray.filter((book) => {
        return book.title.toLowerCase().includes(searchQuery);
      });
    },
    setSelect: (state, action) => {
      // Imposta lo stato di selezione del libro
      const bookSelected = state.bookArray.find((book) => book.asin === state.asin);
      if (bookSelected) {
        bookSelected.isSelected = action.payload;
      }
    },
    setBookDetail: (state, action) => {
      // Imposta il libro selezionato per la pagina dettaglio
      state.BookDetail = state.bookArray.find((book) => book.asin === action.payload);
    },
    setCurrentPage: (state, action) => {
      // Imposta la pagina corrente
      state.totalPages = Math.ceil(state.originalBookArray.length / 9); // Calcola il numero totale di pagine
      state.currentPage = action.payload;
      const startIndex = (state.currentPage - 1) * 9;
      const endIndex = startIndex + 9;
      state.bookArray = state.originalBookArray.slice(startIndex, endIndex);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      // Aggiorna lo stato con i libri fetchati
      state.bookArray = action.payload;
      state.originalBookArray = action.payload;
    });
  },
});

export const {
  setCategory,
  setSearch,
  setSelect,
  setAsin,
  setBookDetail,
  setCurrentPage,
} = bookSlice.actions;

export default bookSlice.reducer;
