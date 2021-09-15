import React, {useState} from 'react';
import './ModalPortfolio.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function ModalPortfolio(props) {
  const modalP = React.createRef();
  // {props.modal ? 'modal-portfolio modal-active' : 'modal-portfolio'}
  // onClick={() => props.setModal(false)}
  // modal-portfolio
  // onClick={(e) => e.target.classList.remove('_modal-active')}
  // modal_P modal_P-block
  const closeModal = () => {
    let dataModal = modalP.current;
    dataModal.classList.remove('_modal-active');
    document.body.classList.remove('no-scroll'); // body scroll on when modal is closed
    props.setModal('');
  }
 
    return (
      <div className={props.dataId === props.modal ? 'modal-portfolio _modal-active' : 'modal-portfolio'} data-id={props.dataId} ref={modalP} onClick={closeModal}>
        <div className={props.dataId === props.modal ? 'modal_P modal_P-block _modal-active-content' : 'modal_P modal_P-block'} onClick={e => e.stopPropagation()}>
          <button className="modal_P-block__close" type="button" onClick={closeModal}>
            <picture>
            <img src="img/close-icon.svg" alt="" className="modal_P-block__close_icon"/>
            </picture>
          </button>
          <div className="modal_P-block__content modal_P-content">
            <div className="modal_P-content__preview">
              <picture>
                  <source srcSet={props.imageWebp} type="image/webp" />
                  <img src={props.imagePng} alt={props.altText} className="modal_P-content__preview_img"/>
              </picture>
            </div>
            <div className="modal_P-content__description">
              <div className="modal_P-content__header">
                <h3 className="modal_P-content__title">{props.title}</h3>
                <div className="modal_P-content__info-tag">
                    {props.category} <span>|</span> {props.year}
                </div>
              </div>
              <div className="modal_P-content__tech">
                <div className="modal_P-content__dev">Developed by: </div>
                <div className="modal_P-content__by">{props.devTools}</div>
              </div>
              <div className="modal_P-content__text">
                {props.description}
              </div>
            </div>
            <div className="modal_P-content__footer">
              <div className="modal_P-content__links modal-links">
                <button className="modal-links__start">Start App</button>
                {/* <button className="modal-links__git"> */}
                  <a href={props.gitLink} className="modal-links__git">{props.gitLink}</a>
                  {/* </button> */}
              </div>
              <div className="modal_P-content__slides slides-buttons">
                <button className="slides-buttons__prev">
                  <picture>
                    <img src="img/prev-icon.svg" alt="" className="slides-buttons__prev_icon"/>
                  </picture>
                    Prev
                </button>
                <button className="slides-buttons__next">
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
export default ModalPortfolio;