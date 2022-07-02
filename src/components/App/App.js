import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';
import Footer from '../Footer/Footer';

//======================= redux ========================

import store from '../../store';
import { Provider } from 'react-redux';

//======================================================

function App() {
    const [hireResumeData, setHireResumeData] = useState('');
    const [navScroll, setNavScroll] = useState();

    return (
        <>
            <Provider store={store}>
                <Header modal={hireResumeData} setModal={setHireResumeData} navScroll={navScroll} setNavScroll={setNavScroll}/>
             
                <Main modal={hireResumeData} setModal={setHireResumeData} navScroll={navScroll} setNavScroll={setNavScroll}/>
                
                <Footer modal={hireResumeData} setModal={setHireResumeData} navScroll={navScroll} setNavScroll={setNavScroll}/>
           </Provider>
        </>
    );
}

export default App;