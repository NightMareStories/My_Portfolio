import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
    const navMenu = React.createRef();

    const openModal = (event) => {
        event.preventDefault();
        if (!event.target.getAttribute('data-id')) {
            let data = event.target.parentElement.getAttribute('data-id');
            document.body.classList.add('no-scroll'); //body scroll off when modal is open
            props.setModal(data);
        }
        else {
            let data = event.target.getAttribute('data-id');
            document.body.classList.add('no-scroll'); //body scroll off when modal is open
            props.setModal(data);
        }
        
    }

    const navScroll = (event) => {
        event.preventDefault();
        let scrollData = props.navScroll;

        if (!event.target.getAttribute('data-id')) {
            let data = event.target.parentElement.getAttribute('data-id');
            for (let i = 0; i < scrollData.length; i++) {
                if (scrollData[i].getAttribute('data-id') === data) {
                    scrollData[i].scrollIntoView({ behavior: 'smooth', block : 'start'});
                }
            }
        }
        else {
            let data = event.target.getAttribute('data-id');
            for (let i = 0; i < scrollData.length; i++) {
                if (scrollData[i].getAttribute('data-id') === data) {
                    scrollData[i].scrollIntoView({ behavior: 'smooth', block : 'start'});
                }
            }
        }
    }

    const showHideMenu = (event) => {
        event.preventDefault();
        
        if (event.target.parentElement.classList.contains('header-menu')) {
            let icons = event.target.parentElement.children;

            for (let i = 0; i < icons.length; i++) {
                if (icons[i].classList.contains('header-menu__icon')) {
                    if (!icons[i].classList.contains('_hide')) {
                        icons[i].classList.add('_hide');
                    }
                    else {
                        icons[i].classList.remove('_hide');
                    }
                }
            }

            event.target.parentElement.classList.toggle('_show');
            navMenu.current.classList.toggle('_show');
        }
    } 

    
    return (
        <>
            <div className="header-nav__content _container">
                <div className="header-menu" onClick={showHideMenu} >
                    <img src="img/burger-menu-icon.svg" alt="burger-menu-icon" className="header-menu__icon"/>
                    <img src="img/burger-menu-close-icon.svg" alt="burger-menu-close-icon" className="header-menu__icon _hide"/>
                    <nav className="header-nav__column" ref={navMenu}>
                        <ul className="header-nav__actions actions-header">
                            <li><Link to='/' className="actions-header__link" data-id="about" onClick={navScroll}><span>About me</span></Link></li>
                            <li><a href='https://github.com/NightMareStories?tab=repositories' className="actions-header__link" onClick={e => e.stopPropagation()}><span>My projects</span></a></li>
                            <li><Link to='/' className="actions-header__link" data-id="portfolio" onClick={navScroll}><span>Portfolio</span></Link></li>
                            <li><Link to='/' className="actions-header__link" data-id="certificates" onClick={navScroll}><span>Certificates</span></Link></li>
                            <li><Link to='/' className="actions-header__link actions-header__link_btn" data-id="hire" onClick={openModal}><span>Hire me</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Nav;