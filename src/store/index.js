import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolio/portfolioSlice';
import applicationsReducer from './portfolio/applicationsSlice';
import certificatesReducer from './certificates/certificatesSlice';
import coverReducer from './certificates/coverSlice';
import socialLinksReducer from './socialLinks/socialLinksSlice';

export default configureStore({
    reducer: {
        portfolio: portfolioReducer,
        applications: applicationsReducer,
        certificates: certificatesReducer,
        cover: coverReducer,
        socialLinks: socialLinksReducer
    },
});