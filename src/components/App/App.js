import React, { useState } from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from '../Main/Main';
import './App.scss';
import Footer from '../Footer/Footer';

//======================= redux ========================

import store from '../../store';
import { Provider } from 'react-redux';


//======================================================


/* <picture>
                    <source srcSet="img/about-text-img.webp" type="image/webp" />
                    <img src="img/about-text-img.png" alt="" />
                </picture> */

function App() {
    const [hireResumeData, setHireResumeData] = useState('');

    return (
        <>
            <Provider store={store}>
                <Header modal={hireResumeData} setModal={setHireResumeData}/>
             
                <Main modal={hireResumeData} setModal={setHireResumeData}/>
                
                <Footer modal={hireResumeData} setModal={setHireResumeData}/>
           </Provider>
        </>
    );
}

export default App;