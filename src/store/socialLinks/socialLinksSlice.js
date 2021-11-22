import { createSlice } from "@reduxjs/toolkit";
import socialLinksData from '../../data/socialLinks/socialLinksData';

export const socialLinksSlice = createSlice({
    name : 'socialLinks',
    initialState : {
        data : socialLinksData
    },
    reducers : {
        
    },
});

// export const {} = socialLinksSlice.actions;
export const selectSocialLinks = state => state.socialLinks.data;
export default socialLinksSlice.reducer;