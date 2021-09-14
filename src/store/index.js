import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";
import applicationsReducer from "./applicationsSlice";

export default configureStore({
    reducer : {
        portfolio : portfolioReducer,
        applications : applicationsReducer
    },
});