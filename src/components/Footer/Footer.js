import Nav from './Nav/Nav';
import './Footer.scss';
import SocialLinksFooterList from '../../containers/socialLinks/SocialLinksFooterList';

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
                            <ul>
                                <SocialLinksFooterList />
                            </ul>
                        </div>
                    </div>
                    <Nav modal={props.modal} setModal={props.setModal} navScroll={props.navScroll} setNavScroll={props.setNavScroll}/>
                </div>
               
            </div>
        </footer>
  );

}
export default Footer;