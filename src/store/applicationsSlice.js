import { createSlice } from "@reduxjs/toolkit";
import applicationsData from "../data/applicationsData";

export const applicationsSlice = createSlice({
    name : 'applications',
    initialState : {
        data : applicationsData
    },
    reducers : {
        
    },
});

export const {} = applicationsSlice.actions;
export const selectApplications = state => state.applications.data;
export default applicationsSlice.reducer;