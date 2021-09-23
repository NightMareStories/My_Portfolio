import React, {useState, useEffect} from 'react';
import { Link as Link } from 'react-router-dom';
import './Nav.scss';

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
    return ( 
            <nav className="block-footer__nav">
                    <ul className="block-footer__actions actions-footer">
                        <li><Link to='/' className="actions-footer__link"><span>About me</span></Link></li>
                        <li><Link to='/rates' className="actions-footer__link"><span>My projects</span></Link></li>
                        <li><Link to='/' className="actions-footer__link"><span>Portfolio</span></Link></li>
                        <li><Link to='/' className="actions-footer__link"><span>Certificates</span></Link></li>
                        <li><Link to='/' className="actions-footer__link actions-footer__link_btn" data-id="hire" onClick={openModal}><span>Hire me</span></Link></li>
                    </ul >
            </nav >
    );
}

export default Nav;