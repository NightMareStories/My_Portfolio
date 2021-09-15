import { createSlice } from "@reduxjs/toolkit";
import portfolioData from "../../data/portfolio/portfolioData";

export const portfolioSlice = createSlice({
    name : 'portfolio',
    initialState : {
        data : portfolioData
    },
    reducers : {
        
    },
});

export const {} = portfolioSlice.actions;
export const selectPortfolio = state => state.portfolio.data;
export default portfolioSlice.reducer;