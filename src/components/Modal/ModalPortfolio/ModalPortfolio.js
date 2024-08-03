import React from 'react';
import './ModalPortfolio.scss';

function ModalPortfolio(props) {
  const modalP = React.createRef();

  const closeModal = () => {
    let dataModal = modalP.current;
    dataModal.classList.remove('_modal-active');
    document.body.classList.remove('no-scroll'); // Body scroll on when modal is closed
    props.setModal('');
  }

  const nextSlide = () => {
    let data = props.data;
    let count;
    let k = 0;

    for (let i = 0; i < data.length; i++) {
      k++;
      count = 'a' + k;

      if (data[i].dataId === props.modal) {
        if (k === data.length) {
          k = 1;
          count = 'a' + k;
          props.setModal(count);
        }
        else {
          count = 'a' + (k + 1);
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
      count = 'a' + k;

      if (data[i].dataId === props.modal) {
        if (k === 1) {
          k = data.length;
          count = 'a' + k;
          props.setModal(count);
        }
        else {
          count = 'a' + (k - 1);
          props.setModal(count);
        }
      }
    }
  }

  return (
    <div className={props.dataId === props.modal ? 'modal-portfolio _modal-active' : 'modal-portfolio'} data-id={props.dataId} ref={modalP} onClick={closeModal}>
      <div className={props.dataId === props.modal ? 'modal_P modal_P-block _modal-active-content' : 'modal_P modal_P-block'} onClick={e => e.stopPropagation()}>
        <button className="modal_P-block__close" type="button" onClick={closeModal}>
          <picture>
            <img src="img/close-icon.svg" alt="close-icon" className="modal_P-block__close_icon" />
          </picture>
        </button>
        <div className="modal_P-block__content modal_P-content">
          <div className="modal_P-content__preview">
            <picture>
              <source srcSet={props.imageWebp} type="image/webp" />
              <a href={props.imagePng}>
                <img src={props.imagePng} alt={props.altText} className="modal_P-content__preview_img" />
              </a>
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
              <a href={props.appLink} className="modal-links__start" target="_blank" rel="noopener noreferrer">Start App</a>
              <a href={props.gitLink} className="modal-links__git" target="_blank" rel="noopener noreferrer">{props.gitLink}</a>
            </div>
            <div className="modal_P-content__slides slides-buttons">
              <button className="slides-buttons__prev" onClick={prevSlide}>
                <picture>
                  <img src="img/prev-icon.svg" alt="prev-icon" className="slides-buttons__prev_icon" />
                </picture>
                Prev
              </button>
              <button className="slides-buttons__next" onClick={nextSlide}>
                Next
                <picture>
                  <img src="img/next-icon.svg" alt="next-icon" className="slides-buttons__next_icon" />
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