import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import ModalPortfolio from "../../components/Modal/ModalPortfolio/ModalPortfolio";
import {selectApplications} from "../../store/portfolio/applicationsSlice";


function ApplicationsList(props) {
    const applications = useSelector(selectApplications);
    const dispatch = useDispatch();
   

    return (
        <>
            
            {applications.map(item => <ModalPortfolio key={item.id} dataId={item.dataId} title={item.title} year={item.year} category={item.category} devTools={item.devTools} description={item.description} gitLink={item.gitLink} imagePng={item.imagePng} imageWebp={item.imageWebp} altText={item.altText} modal={props.modal} setModal={props.setModal}/>)}
        </>
    );
}

export default ApplicationsList;