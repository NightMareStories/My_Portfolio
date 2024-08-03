import { createSlice } from '@reduxjs/toolkit';
import applicationsData from '../../data/portfolio/applicationsData';

export const applicationsSlice = createSlice({
    name: 'applications',
    initialState: {
        data: applicationsData
    },
    reducers: {

    },
});

// export const {} = applicationsSlice.actions;
export const selectApplications = state => state.applications.data;
export default applicationsSlice.reducer;