import React, {useState} from 'react';
import './ModalCertificates.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function ModalCertificates(props) {
  const modalC = React.createRef();

  const closeModal = (event) => {
    let dataModal = modalC.current;
    dataModal.classList.remove('_modal-active');
    document.body.classList.remove('no-scroll'); // body scroll on when modal is closed
    props.setModal('');
  }

  const nextSlide = () => {
    let data = props.data;
    let count;
    let k = 0;

    for (let i = 0; i < data.length; i++) {
      k++;
      count = 'r' + k; 
      
      if (data[i].dataId === props.modal) {
        if (k === data.length) {
          k = 1;
          count = 'r' + k;
          props.setModal(count);
       }
        else {
          count = 'r' + (k + 1);
          props.setModal(count);
       }
      }
    }
  }

  const prevSlide = () => {
    let data = props.data;
    let count;
    let k = 0;

    for (let i = 0; i < data.length; i++) {
      k++;
      count = 'r' + k; 
      
      if (data[i].dataId === props.modal) {
        if (k === 1) {
          k = data.length;
          count = 'r' + k;
          props.setModal(count);
       }
        else {
          count = 'r' + (k - 1);
          props.setModal(count);
       }
      }
    }
  }

    return (
      <div className={props.dataId === props.modal ? 'modal-certificates _modal-active' : 'modal-certificates'} data-id={props.dataId} ref={modalC} onClick={closeModal}>
        <div className={props.dataId === props.modal ? 'modal_C modal_C-block _modal-active-content' : 'modal_C modal_C-block'} onClick={e => e.stopPropagation()}>
          <button className="modal_C-block__close" type="button" onClick={closeModal}>
            <picture>
            <img src="img/close-icon.svg" alt="" className="modal_C-block__close_icon"/>
            </picture>
          </button>
          <div className="modal_C-block__content modal_C-content">
            <div className="modal_C-content__preview">
              <picture>
                  <source srcSet={props.imageWebp} type="image/webp" />
                  <img src={props.imagePng} alt="" className="modal_C-content__preview_img"/>
              </picture>
            </div>
            <div className="modal_C-content__description">
              <div className="modal_C-content__header">
                <h3 className="modal_C-content__title">{props.title}</h3>
                <div className="modal_C-content__info-tag">
                    {props.category} <span>|</span> {props.year}
                </div>
              </div>
              <div className="modal_C-content__tech">
                <div className="modal_C-content__dev">Studied Topics: </div>
                <div className="modal_C-content__by">{props.studiedTopics}</div>
              </div>
              <div className="modal_C-content__text">
                {props.description}
              </div>
            </div>
            <div className="modal_C-content__footer">
              <div className="modal_C-content__links modal-links">
                <button className="modal-links__start">Start App</button>
                {/* <button className="modal-links__git"> */}
                  <a href={props.link} className="modal-links__git" target="_blank"
                    rel="noopener noreferrer">{props.link}</a>
                  {/* </button> */}
              </div>
              <div className="modal_C-content__slides slides-buttons">
                <button className="slides-buttons__prev" onClick={prevSlide}>
                  <picture>
                    <img src="img/prev-icon.svg" alt="" className="slides-buttons__prev_icon"/>
                  </picture>
                    Prev
                </button>
                <button className="slides-buttons__next" onClick={nextSlide}>
                  Next
                <picture>
                  <img src="img/next-icon.svg" alt="" className="slides-buttons__next_icon"/>
              </picture>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

}
export default ModalCertificates;