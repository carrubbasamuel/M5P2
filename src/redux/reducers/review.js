import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const endpoint = `https://striveschool-api.herokuapp.com/api/comments/`;
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlM2MxNmI5YzBmNzAwMTQ0ODRlZDgiLCJpYXQiOjE2ODg3NTI5NDYsImV4cCI6MTY4OTk2MjU0Nn0.MoSR2wOlV_FtA4bPLcsBZJoWiFj4DkFDtjJHwgyV2Dk";

// Funzione asincrona per ottenere i commenti
export const fetchReview = createAsyncThunk(
  'review/fetchReview',
  async (asin) => {
    const response = await fetch(endpoint + asin, {
      headers: {
        Authorization: key
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }
);

// Funzione asincrona per inviare un commento
export const postReview = createAsyncThunk(
  'review/postReview',
  async (review) => {
    try {
      console.log(review);
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
          'Content-type': 'application/json',
          Authorization: key
        }
      });
      if (response.ok) {
        console.log('Review added');
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// Funzione asincrona per eliminare un commento
export const deleteReview = createAsyncThunk(
  'review/deleteReview',
  async (id, { getState }) => {
    try {
      const state = getState();
      const comment = state.root.review.reviewArray.find((review) => review._id === id);
      
      const response = await fetch(endpoint + comment._id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: key,
        },
      });
      if (response.ok) {
        console.log('Review deleted');
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// Funzione asincrona per aggiornare un commento
export const updateReview = createAsyncThunk(
  'review/updateReview',
  async (review) => {
    try {
      const response = await fetch(endpoint + review._id, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
          'Content-type': 'application/json',
          Authorization: key
        }
      });
      if (response.ok) {
        console.log('Review updated');
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// Stato iniziale per il modulo review
const initialState = {
  reviewArray: [], // Array dei commenti
  StateAddButton: false, // Stato del pulsante per aggiungere un commento
  StateRating: 0, // Stato del rating
  Loading: false, // Stato di caricamento
  CurrentReview: {}, // Commento corrente
  isMobile: false,
  offcanvas: false
};

// Slice per il modulo review
const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      // Imposta l'array dei commenti
      state.reviewArray = action.payload;
    },
    setAddButton: (state, action) => {
      // Imposta lo stato del pulsante per aggiungere un commento
      state.StateAddButton = action.payload;
    },
    setAddRate: (state, action) => {
      // Imposta lo stato del rating
      state.StateRating = action.payload;
    },
    setEditMode: (state, action) => {
      // Imposta la modalità di modifica per un commento
      const { id, editMode } = action.payload;
      const index = state.reviewArray.findIndex((review) => review._id === id);
      if (state.reviewArray[index].editMode === editMode) {
        state.reviewArray[index].editMode = !editMode;
      } else {
        state.reviewArray[index].editMode = editMode;
      }
      state.CurrentReview = state.reviewArray[index];
    },


    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    setOffcanvas: (state, action) => {
      state.offcanvas = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReview.pending, (state) => {
        // Stato di caricamento durante la richiesta
        state.Loading = true;
      })
      .addCase(fetchReview.fulfilled, (state, action) => {
        // Aggiorna lo stato con i commenti ottenuti
        state.Loading = false;
        state.reviewArray = action.payload.reverse() || [];
        state.StateAddButton = true;
      })
      .addCase(fetchReview.rejected, (state, action) => {
        // Stato di errore durante la richiesta
        state.Loading = false;
        console.log(action.error);
      });
  }
});

export const {

  setReview,
  setAddButton,
  setAddRate,
  setEditMode,
  setIsMobile,
  setOffcanvas

} = reviewSlice.actions;

export default reviewSlice.reducer;
