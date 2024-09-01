import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
        const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=UHDVf4DeJiHxbNkAIJBO5JbLeMbXkXK3o7woFZeCQGEb-fu7Zc7ZcRvd0s27qCxlFzA5WceslTUrR2YkCAIFCN8tqdfg7jqpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLKrjmLhIjfh6mfRVj2wyVQuHM-hi15k1JFxJUI4jL5MWhJ3pCgthWN9ZvsigbF_mLjU8Cj5QV9aJ3pAtR4ZdX3_q7q0ZNvYzNz9Jw9Md8uu&lib=MvSInmfmPYgzse3kP4BOwuMDBrwaeO73j");
        if (response.ok) {
            const data = await response.json();
            // console.log(data.data)
            return data.data;

        } else {    
            throw new Error('Failed to fetch data');
        }
    }
);

// console.log(fetchData())

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: { 
        updateLikes: (state, action) => {
            state.items = state.items.map((course) => {
                if(course.ID == action.payload.id){
                    return {...course, Likes: action.payload.liked ? course.Likes + 1 : course.Likes > 0 ? course.Likes - 1 : course.Likes}
                }else{
                    return course
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const {updateLikes} = dataSlice.actions
export default dataSlice.reducer;   
