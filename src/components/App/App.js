import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

/* <picture>
                    <source srcSet="img/about-text-img.webp" type="image/webp" />
                    <img src="img/about-text-img.png" alt="" />
                </picture> */

function App() {
    return (
        <>
            <Router>
                <Header />
            </Router>

        </>
    );
}

export default App;