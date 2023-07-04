import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const endpoint = `https://striveschool-api.herokuapp.com/api/comments/`;
const key = "Bearer yourAccessToken";

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
      console.log(data);
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
  addRate: 0,
  loading: false
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      state.reviewArray = action.payload;
    },
    setAddReviewOpen: (state) => {
      state.isAddReviewOpen = !state.isAddReviewOpen;
      state.addRate = 0;
    },
    setAddRate: (state, action) => {
      state.addRate = action.payload;
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
  setAddRate
} = reviewSlice.actions;

export default reviewSlice.reducer;


