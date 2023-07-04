import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const endpoint = `https://striveschool-api.herokuapp.com/api/comments/`
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlM2MxNmI5YzBmNzAwMTQ0ODRlZDgiLCJpYXQiOjE2ODc1NDI0MzEsImV4cCI6MTY4ODc1MjAzMX0.d6MQUWUpdusXGvNd72LzIvVPzs6OxCfRXI1iQkTjhy8"

export const fetchReview = createAsyncThunk(
  'review/fetchReview',
  async (asin) => {
    const response = await fetch(endpoint + asin, {
      headers: {
        "Authorization": key
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }
);

export const postReview = createAsyncThunk(
  'review/postReview',
  async (review) => {
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        "Authorization": key
      }
    });

    if (response.ok) {
      console.log("Review added");
      const data = await response.json();
      return data;
    }
  }
);

const initialState = {
  reviewArray: [],
  stateAddbutton: false,
  loading: false
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      state.reviewArray = action.payload;
    },
    setAddButton: (state, action) => {
      state.stateAddbutton = action.payload;
    },
    setAddReviewOpen: (state) => {
      state.isAddReviewOpen = !state.isAddReviewOpen;
      state.addRate = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReview.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviewArray = action.payload || [];
        state.stateAddbutton = true;
      })
      .addCase(fetchReview.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
      });
  }
});

export const {
  setReview,
  setAddReviewOpen,
  setAddRate,
  setAddButton
} = reviewSlice.actions;

export default reviewSlice.reducer;


