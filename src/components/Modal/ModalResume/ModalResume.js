import './ModalResume.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function ModalResume() {
    return (
        <div className="modal-resume">
        <div className="modal_R modal_R-block">
           <button className="modal_R-block__close" type="button">
               <picture>
                   <img src="img/close-icon.svg" alt="" className="modal_R-block__close_icon"/>
               </picture>
           </button>
           <div className="modal_R-block__content modal_R-content">
               <div className="modal_R-content__header">
                   <h3 className="modal_R-content__title">Please, if you want to see my resume, follow one of the attached links!</h3>
               </div>
               <div className="modal_R-content__contacts social-contacts">
                   <a href="" className="social-contacts__link">
                       <picture>
                           <source srcSet="img/headhunter-icon.webp" type="image/webp" />
                           <img src="img/headhunter-icon.png" alt="" className="social-contacts__link_icon"/>
                       </picture>
                   </a>
                   <a href="" className="social-contacts__link">
                       <picture>
                           <source srcSet="img/linkedin-icon.webp" type="image/webp" />
                           <img src="img/linkedin-icon.png" alt="" className="social-contacts__link_icon"/>
                       </picture>
                   </a>
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