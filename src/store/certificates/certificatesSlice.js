import { createSlice } from "@reduxjs/toolkit";
import certificatesData from "../../data/certificates/certificatesData";

export const certificatesSlice = createSlice({
    name : 'certificates',
    initialState : {
        data : certificatesData
    },
    reducers : {
        
    },
});

export const {} = certificatesSlice.actions;
export const selectCertificates = state => state.certificates.data;
export default certificatesSlice.reducer;