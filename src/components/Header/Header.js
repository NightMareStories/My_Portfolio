import Nav from './Nav/Nav';
import './Header.scss';

function Header(props) {
    return (
        <>
            <header className="header">
                <div className="header__top top-header">
                    <div className="top-header__content _container">
                        <div className="top-header__column header-info">
                            <div className="header-info__logo">
                                <picture>
                                    <source srcSet="img/logo-img.webp" type="image/webp" className="header-info__logo_img" />
                                    <img src="img/logo-img.png" alt="logo-img" className="header-info__logo_img" />
                                </picture>
                            </div>
                            <div className="header-info__text">
                                <div className="header-info__text_username">
                                    Poteryaev<br /> Aleksandr
                                </div>
                                <div className="header-info__text_userprof">
                                    Front-End Developer
                                </div>
                            </div>
                        </div>
                        <div className="top-header__column header-nav">
                            <Nav modal={props.modal} setModal={props.setModal} navScroll={props.navScroll} setNavScroll={props.setNavScroll} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
