import './ModalPortfolio.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function ModalPortfolio() {
    return (
      <div className="modal-portfolio">
        <div className="modal_P modal_P-block">
          <button className="modal_p-block__close" type="button"></button>
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
              <div className="modal_P-content__links">
                <button>Start App</button>
                <button>Go to GitHub</button>
              </div>
              <div className="modal_P-content__slides">
                <button>Previous</button>
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

}
export default ModalPortfolio;