import { createSlice } from '@reduxjs/toolkit';
import coverData from '../../data/certificates/coverData';

export const coverSlice = createSlice({
    name: 'cover',
    initialState: {
        data: coverData
    },
    reducers: {

    },
});

// export const {} = coverSlice.actions;
export const selectCover = state => state.cover.data;
export default coverSlice.reducer;