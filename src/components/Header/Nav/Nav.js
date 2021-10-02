import React, {useEffect, useState} from 'react';
import { Link as Link } from 'react-router-dom';
import './Nav.scss';
// import '../../css/components/Nav/Nav.css';

function Nav(props) {
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
    return (
        <>
            <div className="header-nav__content _container">
                <nav className="header-nav__column">
                    <ul className="header-nav__actions actions-header">
                        <li><Link to='/' className="actions-header__link" data-id="about" onClick={navScroll}><span>About me</span></Link></li>
                        <li><Link to='/rates' className="actions-header__link"><span>My projects</span></Link></li>
                        <li><Link to='/' className="actions-header__link" data-id="portfolio" onClick={navScroll}><span>Portfolio</span></Link></li>
                        <li><Link to='/' className="actions-header__link" data-id="certificates" onClick={navScroll}><span>Certificates</span></Link></li>
                        <li><Link to='/' className="actions-header__link actions-header__link_btn" data-id="hire" onClick={openModal}><span>Hire me</span></Link></li>
                    </ul >
                </nav >
            </div >
        </>
    );
}

export default Nav;