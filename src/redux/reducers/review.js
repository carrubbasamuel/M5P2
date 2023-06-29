

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
        })
        if (response.ok) {
            const data = await response.json()
            return data
        }
    }
)

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
        })
        if (response.ok) {
            console.log("Review added");
            const data = await response.json()
            return data
        }
    }
)


const initialState = {
    reviewArray: [],
    addRate: 0,
}


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
        .addCase(fetchReview.fulfilled, (state, action) => {
            state.reviewArray = action.payload;
        })
        .addCase(fetchReview.rejected, (state, action) => {
            console.log(action.error)
        })
    }
});


export const { 


    setReview,
    setAddReviewOpen,
    setAddRate
    

} = reviewSlice.actions;


export default reviewSlice.reducer;