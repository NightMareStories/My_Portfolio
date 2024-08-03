import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
    const openModal = (event) => {
        event.preventDefault();
        if (!event.target.getAttribute('data-id')) {
            let data = event.target.parentElement.getAttribute('data-id');
            document.body.classList.add('no-scroll'); // Body scroll off when modal is open
            props.setModal(data);
        }
        else {
            let data = event.target.getAttribute('data-id');
            document.body.classList.add('no-scroll'); // Body scroll off when modal is open
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
                    scrollData[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
        else {
            let data = event.target.getAttribute('data-id');
            for (let i = 0; i < scrollData.length; i++) {
                if (scrollData[i].getAttribute('data-id') === data) {
                    scrollData[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    }
    return (
        <nav className="block-footer__nav">
            <ul className="block-footer__actions actions-footer">
                <li><Link to='/' className="actions-footer__link" data-id="about" onClick={navScroll}><span>About me</span></Link></li>
                <li><a href='https://github.com/NightMareStories?tab=repositories' className="actions-footer__link" onClick={e => e.stopPropagation()}><span>My projects</span></a></li>
                <li><Link to='/' className="actions-footer__link" data-id="portfolio" onClick={navScroll}><span>Portfolio</span></Link></li>
                <li><Link to='/' className="actions-footer__link" data-id="certificates" onClick={navScroll}><span>Certificates</span></Link></li>
                <li><Link to='/' className="actions-footer__link actions-footer__link_btn" data-id="hire" onClick={openModal}><span>Hire me</span></Link></li>
            </ul>
        </nav >
    );
}

export default Nav;