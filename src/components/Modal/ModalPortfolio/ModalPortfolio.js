import './ModalPortfolio.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function ModalPortfolio() {
    return (
      <div className="modal-portfolio">
        <div className="modal_P modal_P-block">
          <button className="modal_p-block__close" type="button">
            <picture>
            <img src="img/close-icon.svg" alt="" className="modal_P-block__close_icon"/>
            </picture>
          </button>
          <div className="modal_P-block__content modal_P-content">
            <div className="modal_P-content__preview">
              <picture>
                  <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                  <img src="img/sport-shop-img.png" alt="" className="modal_P-content__preview_img"/>
              </picture>
            </div>
            <div className="modal_P-content__description">
              <div className="modal_P-content__header">
                <h3 className="modal_P-content__title">Sport Shop</h3>
                <div className="modal_P-content__info-tag">
                    Site <span>|</span> 2021
                </div>
              </div>
              <div className="modal_P-content__tech">
                <div className="modal_P-content__dev">Developed by: </div>
                <div className="modal_P-content__by">HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider</div>
              </div>
              <div className="modal_P-content__text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni est praesentium, eum sapiente explicabo dolor similique esse labore id adipisci. Tempora vel modi explicabo doloremque velit. Nam, quibusdam eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatem dignissimos quam est quaerat quod praesentium maiores? Ea recusandae culpa ex dicta, odit a quia natus quidem. Cumque, sed labore!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni est praesentium, eum sapiente explicabo dolor similique esse labore id adipisci. Tempora vel modi explicabo doloremque velit. Nam, quibusdam eum.</p>
              </div>
            </div>
            <div className="modal_P-content__footer">
              <div className="modal_P-content__links modal-links">
                <button className="modal-links__start">Start App</button>
                {/* <button className="modal-links__git"> */}
                  <a href="https://github.com/NightMareStories/Sport-shop" className="modal-links__git">https://github.com/NightMareStories/Sport-shop</a>
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