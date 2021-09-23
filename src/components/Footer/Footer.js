import Nav from './Nav/Nav';
import './Footer.scss';
import { Link as Link } from 'react-router-dom';
// import '../../css/components/Footer/Footer.css';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__content content-footer _container">
                <div className="content-footer__block block-footer">
                    <div className="block-footer__credits">
                        <div className="block-footer__copyrights">
                            &copy; 2021 Poteryaev Aleksandr
                        </div>
                        <div className="block-footer__social">
                        <Link to="/" className="block-footer__social_link" target="_blank">
                                <picture>
                                    {/* <source srcSet="img/telegram-icon.webp" type="image/webp" /> */}
                                    <img src="img/telegram-icon.svg" alt="" />
                                </picture>
                            </Link>
                            <Link to="/" className="block-footer__social_link" target="_blank">
                                <picture>
                                    {/* <source srcSet="img/whatsapp-icon.webp" type="image/webp" /> */}
                                    <img src="img/whatsapp-icon.svg" alt="" />
                                </picture>
                            </Link>
                            <Link to="/" className="block-footer__social_link" target="_blank">
                                <picture>
                                    {/* <source srcSet="img/gmail-icon.webp" type="image/webp" /> */}
                                    <img src="img/gmail-icon.svg" alt="" />
                                </picture>
                            </Link>
                            <Link to="/" className="block-footer__social_link" target="_blank">
                                <picture>
                                    {/* <source srcSet="img/yandex-icon.webp" type="image/webp" /> */}
                                    <img src="img/yandex-icon.svg" alt="" />
                                </picture>
                            </Link>
                        </div>
                    </div>
                    <Nav modal={props.modal} setModal={props.setModal}/>
                </div>
               
            </div>
        </footer>
  );

}
export default Footer;