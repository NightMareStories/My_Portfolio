import React from "react";
import {useSelector} from "react-redux";
import ModalPortfolio from "../../components/Modal/ModalPortfolio/ModalPortfolio";
import {selectApplications} from "../../store/portfolio/applicationsSlice";


function ApplicationsList(props) {
    const applications = useSelector(selectApplications);

    let arrData = applications;

    return (
        <>
            {applications.map(item => <ModalPortfolio key={item.id} dataId={item.dataId} title={item.title} year={item.year} category={item.category} devTools={item.devTools} description={item.description} gitLink={item.gitLink} imagePng={item.imagePng} imageWebp={item.imageWebp} altText={item.altText} modal={props.modal} setModal={props.setModal} data={arrData}/>)}
        </>
    );
}

export default ApplicationsList;