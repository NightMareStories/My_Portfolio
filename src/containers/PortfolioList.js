import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import Portfolio from "../components/Portfolio/Portfolio";
import {selectPortfolio} from "../store/portfolioSlice";


function PortfolioList() {
    const portfolio = useSelector(selectPortfolio);
    const dispatch = useDispatch();
   

    return (
        <>
            
            {portfolio.map(item => <Portfolio key={item.id} title={item.title} date={item.date} category={item.category} imagePng={item.imagePng} imageWebp={item.imageWebp} altText={item.altText} cssHide={item.cssHide}/>)}
        </>
    );
}

export default PortfolioList;