import { Link as Link } from 'react-router-dom';
import './Nav.scss';
// import '../../css/components/Nav/Nav.css';

function Nav() {
    return ( 
            <nav className="block-footer__nav">
                    <ul className="block-footer__actions actions-footer">
                        <li><Link to='/' className="actions-footer__link"><span>About me</span></Link></li>
                        <li><Link to='/rates' className="actions-footer__link"><span>My projects</span></Link></li>
                        <li><Link to='/' className="actions-footer__link"><span>Portfolio</span></Link></li>
                        <li><Link to='/' className="actions-footer__link"><span>Certificates</span></Link></li>
                        <li><Link to='/' className="actions-footer__link actions-footer__link_btn"><span>Hire me</span></Link></li>
                    </ul >
            </nav >
    );
}

export default Nav;