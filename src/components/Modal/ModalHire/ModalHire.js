import './ModalHire.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function ModalHire() {
    return (
        <div className="modal-hire">
             <div className="modal_H modal_H-block">
                <button className="modal_H-block__close" type="button">
                    <picture>
                        <img src="img/close-icon.svg" alt="" className="modal_H-block__close_icon"/>
                    </picture>
                </button>
                <div className="modal_H-block__content modal_H-content">
                    <div className="modal_H-content__header">
                        <h3 className="modal_H-content__title">Contact me in any way convenient for you.</h3>
                    </div>
                    <div className="modal_H-content__contacts social-contacts">
                        <a href="" className="social-contacts__link">
                            <picture>
                                <source srcSet="img/telegram-icon.webp" type="image/webp" />
                                <img src="img/telegram-icon.png" alt="" className="social-contacts__link_icon"/>
                            </picture>
                        </a>
                        <a href="" className="social-contacts__link">
                            <picture>
                                <source srcSet="img/whatsapp-icon.webp" type="image/webp" />
                                <img src="img/whatsapp-icon.png" alt="" className="social-contacts__link_icon"/>
                            </picture>
                        </a>
                        <a href="" className="social-contacts__link">
                            <picture>
                                <source srcSet="img/gmail-icon.webp" type="image/webp" />
                                <img src="img/gmail-icon.png" alt="" className="social-contacts__link_icon"/>
                            </picture>
                        </a>
                        <a href="" className="social-contacts__link">
                            <picture>
                                <source srcSet="img/yandex-icon.webp" type="image/webp" />
                                <img src="img/yandex-icon.png" alt="" className="social-contacts__link_icon"/>
                            </picture>
                        </a>
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
                </div>
            </div>
        </div>
    );
}

export default ModalHire;