import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async () => {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzO93TkA24QVp_rECtVWF5yCnLAlRH-VaTy73CDJ69YoA_neT2K2-nIxm-yuHMScsFA7g/exec");
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            return data; 
        } else {
            throw new Error('Failed to fetch student data');
        }
    }
);


const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: { 
        updateStudentProgress: (state, action) => {
            state.items = state.items.map((student) => {
                if(student.ID == action.payload.id){
                    return {...student, Progress: 100, Status: 'Complete'};
                } else {
                    return student;
                }
            });
            // console.log(state.items[0].Progress)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { updateStudentProgress } = studentsSlice.actions;
export default studentsSlice.reducer;
