import React, {useState} from 'react';
import './ModalResume.scss';
import { Link as Link } from 'react-router-dom';
import SocialLinksModalList from '../../../containers/socialLinks/SocialLinksModalList';

function ModalResume(props) {
    const modalR = React.createRef();

    const closeModal = () => {
        let dataModal = modalR.current;
        dataModal.classList.remove('_modal-active');
        document.body.classList.remove('no-scroll'); // body scroll on when modal is closed
        props.setModal('');
    }
    return (
        <div className={props.modal === 'resume' ? 'modal-resume _modal-active' : 'modal-resume'} data-id={props.dataId} ref={modalR} onClick={closeModal}>
        <div className={props.dataId === props.modal ? 'modal_R modal_R-block _modal-active-content' : 'modal_R modal_R-block'} onClick={e => e.stopPropagation()}>
           <button className="modal_R-block__close" type="button" onClick={closeModal}>
               <picture>
                   <img src="img/close-icon.svg" alt="" className="modal_R-block__close_icon"/>
               </picture>
           </button>
           <div className="modal_R-block__content modal_R-content">
               <div className="modal_R-content__header">
                   <h3 className="modal_R-content__title">Please, if you want to see my resume, follow one of the attached links!</h3>
               </div>
               <div className="modal_R-content__contacts social-contacts">
                   <SocialLinksModalList modal={props.modal} setModal={props.setModal}/>
               </div>
               <div className="modal_R-content__footer side-text">
                   <div className="side-text__hired">Thank you!</div>
                   </div>
           </div>
       </div>
   </div>
    );
}

export default ModalResume;