import React from "react";
import {useSelector} from "react-redux";
import Certificates from "../../components/Certificates/Certificates";
import {selectCertificates} from "../../store/certificates/certificatesSlice";


function CertificatesList(props) {
    const certificates = useSelector(selectCertificates);

    return (
        <>
            {certificates.map(item => <Certificates key={item.id} dataId={item.dataId} title={item.title} date={item.date} category={item.category} description={item.description} imagePng={item.imagePng} imageWebp={item.imageWebp} altText={item.altText} modal={props.modal} setModal={props.setModal}/>)}
        </>
    );
}

export default CertificatesList;