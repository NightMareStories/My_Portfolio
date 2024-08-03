import './Main.scss';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PortfolioList from '../../containers/portfolio/PortfolioList';
import ApplicationsList from '../../containers/portfolio/ApplicationsList';
import CertificatesList from '../../containers/certificates/CertificatesList';
import CoverList from '../../containers/certificates/CoverList';
import ModalHire from '../Modal/ModalHire/ModalHire';
import ModalResume from '../Modal/ModalResume/ModalResume';
import SocialLinksMainList from '../../containers/socialLinks/SocialLinksMainList';

function Main(props) {
    const portfolioRef = React.createRef();
    const filterActions = React.createRef();
    const portfolioScroll = React.createRef();
    const aboutScroll = React.createRef();
    const certificatesScroll = React.createRef();
    const [appData, setAppData] = useState('');
    const [coverData, setCoverData] = useState('');

    useEffect(() => {
        let portfolioScrollData = portfolioScroll.current;
        let aboutScrollData = aboutScroll.current;
        let certificatesScrollData = certificatesScroll.current;
        let scrollData = [];

        scrollData.push(portfolioScrollData, aboutScrollData, certificatesScrollData);

        props.setNavScroll(scrollData);
    }, [])

    const filter = (event) => {
        event.preventDefault();
        if (!event.target.getAttribute('data-filter')) return false;
        let category = event.target.getAttribute('data-filter');
        let actions = filterActions.current.children;
        let content = portfolioRef.current.children;

        for (let i = 0; i < actions.length; i++) {
            if (!actions[i].classList.contains('active-filter') && actions[i] === event.target) {
                actions[i].classList.add('active-filter');
            }
            else if (actions[i].classList.contains('active-filter') && actions[i] !== event.target) {
                actions[i].classList.remove('active-filter');
            }
        }

        for (let i = 0; i < content.length; i++) {
            if (category === 'all') {
                content[i].classList.remove('hide');
            }
            else if (content[i].getAttribute('data-category') === category) {
                content[i].classList.remove('hide');
            }
            else {
                content[i].classList.add('hide');
            }
        }
    }

    const loadMoreWork = (event) => {
        let content = portfolioRef.current.children;
        let button = event.target;
        for (let i = 0; i < content.length; i++) {
            if (content[i].classList.contains('non-visible')) {
                content[i].classList.remove('non-visible');
                button.classList.remove('_btn');
                button.classList.add('non-visible');
            }
        }
    }

    const openModal = (event) => {
        event.preventDefault();
        let data = event.target.getAttribute('data-id');
        document.body.classList.add('no-scroll'); // Body scroll off when modal is open
        props.setModal(data);
    }

    return (
        <>
            <main className="page">
                <section className="page__intro intro-block _container">
                    <div className="intro-block__content">
                        <div className="intro-block__info info-block">
                            <div className="info-block__subtitle"><h2>Hello, I'm</h2></div>
                            <div className="info-block__title"><h1>Poteryaev Aleksandr</h1></div>
                            <div className="info-block__text">Front-End Developer</div>
                            <div className="info-block__social social-links">
                                <ul>
                                    <SocialLinksMainList />
                                </ul>
                            </div>
                            <div className="info-block__buttons info-buttons">
                                <Link to="/" className="info-buttons__button _btn" data-id="hire" onClick={openModal}>HIRE ME</Link>
                                <Link to="/" className="info-buttons__button _btn" data-id="resume" onClick={openModal}>SEE MY RESUME</Link>
                            </div>
                        </div>
                        <div className="intro-block__picture">
                            <picture>
                                <source srcSet="img/intro-block-img.webp" type="image/webp" />
                                <img src="img/intro-block-img.png" alt="intro-block-img" />
                            </picture>
                        </div>
                    </div>
                </section>

                <section className="page__portfolio portfolio-block _container" ref={portfolioScroll} data-id="portfolio">
                    <div className="portfolio-block__content">
                        <h2 className="portfolio-block__title">Portfolio</h2>
                        <div className="portfolio-block__nav portfolio-nav" onClick={filter} ref={filterActions}>
                            <a href="/" className="portfolio-nav__filter active-filter" data-filter="all">All</a>
                            <a href="/" className="portfolio-nav__filter" data-filter="app">App</a>
                            <a href="/" className="portfolio-nav__filter" data-filter="website">Website</a>
                        </div>
                        <div className="portfolio-block__portfolio portfolio-content" ref={portfolioRef}>
                            <PortfolioList modal={appData} setModal={setAppData} />
                        </div>
                        <div className="portfolio-block__button portfolio-button">
                            <button type="button" className="portfolio-button__btn _btn" onClick={loadMoreWork}>load more work</button>
                        </div>
                    </div>
                </section>

                <section className="page__about about-block _container" ref={aboutScroll} data-id="about">
                    <div className="about-block__content">
                        <div className="about-block__picture">
                            <div className="about-block__picture_frame">
                                <picture>
                                    <source srcSet="img/about-me-img.webp" type="image/webp" />
                                    <img src="img/about-me-img.png" alt="about-me-img" />
                                </picture>
                            </div>
                        </div>
                        <div className="about-block__text about-text">
                            <h2 className="about-text__title">about me</h2>
                            <h3 className="about-text__subtitle">who am i</h3>
                            <div className="about-text__text">
                                <p>
                                    I got acquainted with programming 3 years ago, I was interested in trying something new, something in which you can constantly develop, something that you can work with anywhere and at any time. I needed to see the result of my work, and control every element of it, so I chose front-end development.
                                </p>
                                <p>
                                    I have learned technologies like HTML5, CSS3, JavaScript ES6, React JS, React-Redux, LESS, SCSS and more. I can create applications, projects, programs using these technologies and always try to do better, faster and better. And most importantly, I love front-end development, I like doing what I do, and I don't want to stop, I WANT TO DEVELOP.
                                </p>
                            </div>
                            <div className="about-text__button about-buttons">
                                <a href="/" className="about-buttons__button _btn" data-id="hire" onClick={openModal}>HIRE ME</a>
                                <a href="/" className="about-buttons__button _btn" data-id="resume" onClick={openModal}>SEE MY RESUME</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__certificates certificates-block _container" ref={certificatesScroll} data-id="certificates">
                    <div className="certificates-block__title certificates-title">
                        <h2 className="certificates-title__title">Certificates</h2>
                        <div className="certificates-title__text">My progress in learning Front-End Development</div>
                    </div>
                    <div className="certificates-block__content certificates-content">
                        <CertificatesList modal={coverData} setModal={setCoverData} />
                    </div>

                </section>
            </main>
            <ApplicationsList modal={appData} setModal={setAppData} />
            <CoverList modal={coverData} setModal={setCoverData} />
            <ModalHire modal={props.modal} setModal={props.setModal} />
            <ModalResume modal={props.modal} setModal={props.setModal} />
        </>
    );
}

export default Main;