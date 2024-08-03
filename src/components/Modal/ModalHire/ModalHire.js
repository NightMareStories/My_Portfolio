import React from 'react';
import './ModalHire.scss';
import SocialLinksModalList from '../../../containers/socialLinks/SocialLinksModalList';

function ModalHire(props) {
    const modalH = React.createRef();

    const closeModal = () => {
        let dataModal = modalH.current;
        dataModal.classList.remove('_modal-active');
        document.body.classList.remove('no-scroll'); // Body scroll on when modal is closed
        props.setModal('');
    }
    return (
        <div className={props.modal === 'hire' ? 'modal-hire _modal-active' : 'modal-hire'} data-id={props.dataId} ref={modalH} onClick={closeModal}>
            <div className={props.dataId === props.modal ? 'modal_H modal_H-block _modal-active-content' : 'modal_H modal_H-block'} onClick={e => e.stopPropagation()}>
                <button className="modal_H-block__close" type="button" onClick={closeModal}>
                    <picture>
                        <img src="img/close-icon.svg" alt="" className="modal_H-block__close_icon" />
                    </picture>
                </button>
                <div className="modal_H-block__content modal_H-content">
                    <div className="modal_H-content__header">
                        <h3 className="modal_H-content__title">Please, сontact me in any way convenient for you!</h3>
                    </div>
                    <div className="modal_H-content__contacts social-contacts">
                        <ul>
                            <SocialLinksModalList modal={props.modal} setModal={props.setModal} />
                        </ul>
                    </div>
                    <div className="modal_H-content__footer side-text">
                        <div className="side-text__hired">Thank you for your time!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalHire;