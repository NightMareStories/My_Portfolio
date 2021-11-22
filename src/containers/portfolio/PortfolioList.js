import React from "react";
import {useSelector} from "react-redux";
import Portfolio from "../../components/Portfolio/Portfolio";
import {selectPortfolio} from "../../store/portfolio/portfolioSlice";


function PortfolioList(props) {
    const portfolio = useSelector(selectPortfolio);
   
    return (
        <>
            {portfolio.map(item => <Portfolio key={item.id} dataId={item.dataId} title={item.title} date={item.date} category={item.category} imagePng={item.imagePng} imageWebp={item.imageWebp} altText={item.altText} cssHide={item.cssHide} modal={props.modal} setModal={props.setModal}/>)}
        </>
    );
}

export default PortfolioList;