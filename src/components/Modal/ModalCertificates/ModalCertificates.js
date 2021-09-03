import './ModalCertificates.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function ModalCertificates() {
    return (
      <div className="modal-certificates">
        <div className="modal_C modal_C-block">
          <button className="modal_C-block__close" type="button">
            <picture>
            <img src="img/close-icon.svg" alt="" className="modal_C-block__close_icon"/>
            </picture>
          </button>
          <div className="modal_C-block__content modal_C-content">
            <div className="modal_C-content__preview">
              <picture>
                  <source srcSet="img/reactjs-lite-img.webp" type="image/webp" />
                  <img src="img/reactjs-lite-img.png" alt="" className="modal_C-content__preview_img"/>
              </picture>
            </div>
            <div className="modal_C-content__description">
              <div className="modal_C-content__header">
                <h3 className="modal_C-content__title">React Lite Level</h3>
                <div className="modal_C-content__info-tag">
                    Certificates <span>|</span> 2020
                </div>
              </div>
              <div className="modal_C-content__tech">
                <div className="modal_C-content__dev">Studied Topics: </div>
                <div className="modal_C-content__by">OOP in ES6, props, states, React-Router, createComponent, JSX, prototype.</div>
              </div>
              <div className="modal_C-content__text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni est praesentium, eum sapiente explicabo dolor similique esse labore id adipisci. Tempora vel modi explicabo doloremque velit. Nam, quibusdam eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatem dignissimos quam est quaerat quod praesentium maiores? Ea recusandae culpa ex dicta, odit a quia natus quidem. Cumque, sed labore!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni est praesentium, eum sapiente explicabo dolor similique esse labore id adipisci. Tempora vel modi explicabo doloremque velit. Nam, quibusdam eum.</p>
              </div>
            </div>
            <div className="modal_C-content__footer">
              <div className="modal_C-content__links modal-links">
                <button className="modal-links__start">Start App</button>
                {/* <button className="modal-links__git"> */}
                  <a href="https://github.com/NightMareStories/Sport-shop" className="modal-links__git">https://github.com/NightMareStories/Sport-shop</a>
                  {/* </button> */}
              </div>
              <div className="modal_C-content__slides slides-buttons">
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
export default ModalCertificates;