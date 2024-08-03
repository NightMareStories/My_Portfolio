import React from 'react';
import { useSelector } from 'react-redux';
import ModalCertificates from '../../components/Modal/ModalCertificates/ModalCertificates';
import { selectCover } from '../../store/certificates/coverSlice';


function CoverList(props) {
    const cover = useSelector(selectCover);

    let arrData = cover;

    return (
        <>
            {cover.map(item => <ModalCertificates key={item.id} dataId={item.dataId} title={item.title} year={item.year} category={item.category} studiedTopics={item.studiedTopics} description={item.description} link={item.link} imagePng={item.imagePng} imageWebp={item.imageWebp} altText={item.altText} modal={props.modal} setModal={props.setModal} data={arrData} />)}
        </>
    );
}

export default CoverList;