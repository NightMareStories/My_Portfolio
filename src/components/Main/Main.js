import './Main.scss';
import { Link as Link } from 'react-router-dom';
import React, { useState } from 'react';
import PortfolioList from '../../containers/PortfolioList';
// import '../../css/components/Main/Main.css';


function Main() {
    const portfolioRef = React.createRef();
    const filterActions = React.createRef();

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
            else if (actions[i].classList.contains('active-filter') && actions[i] !== event.target){
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
        for(let i = 0; i < content.length; i++) {
           if (content[i].classList.contains('non-visible')){
               content[i].classList.remove('non-visible');
               button.classList.remove('_btn');
               button.classList.add('non-visible');
           }
        }
    }

    return (
        <main className="page">
            <section className="page__intro intro-block _container">
                <div className="intro-block__content">
                    <div className="intro-block__info info-block">
                        <div className="info-block__subtitle"><h2>Hello, I'm</h2></div>
                        <div className="info-block__title"><h1>Poteryaev Aleksandr</h1></div>
                        <div className="info-block__text">Front-End Developer</div>
                        <div className="info-block__social social-links">
                            <Link to="/" className="social-links__link">
                                <picture>
                                    <source srcSet="img/telegram-icon.webp" type="image/webp" />
                                    <img src="img/telegram-icon.png" alt="" />
                                </picture>
                            </Link>
                            <Link to="/" className="social-links__link">
                                <picture>
                                    <source srcSet="img/whatsapp-icon.webp" type="image/webp" />
                                    <img src="img/whatsapp-icon.png" alt="" />
                                </picture>
                            </Link>
                            <Link to="/" className="social-links__link">
                                <picture>
                                    <source srcSet="img/gmail-icon.webp" type="image/webp" />
                                    <img src="img/gmail-icon.png" alt="" />
                                </picture>
                            </Link>
                            <Link to="/" className="social-links__link">
                                <picture>
                                    <source srcSet="img/yandex-icon.webp" type="image/webp" />
                                    <img src="img/yandex-icon.png" alt="" />
                                </picture>
                            </Link>
                        </div>
                        <div className="info-block__buttons info-buttons">
                            <Link to="/contacts" className="info-buttons__button _btn">HIRE ME</Link>
                            <Link to="/profile" className="info-buttons__button _btn">SEE MY RESUME</Link>
                        </div>
                    </div>
                    <div className="intro-block__picture">
                        <picture>
                            <source srcSet="img/background-intro-img.webp" type="image/webp" />
                            <img src="img/background-intro-img.png" alt="" />
                        </picture>
                    </div>
                </div>
            </section>

            <section className="page__portfolio portfolio-block _container">
                <div className="portfolio-block__content">
                    <h2 className="portfolio-block__title">Portfolio</h2>
                    <div className="portfolio-block__nav portfolio-nav" onClick={filter} ref={filterActions}>
                        <a href="" className="portfolio-nav__filter active-filter" data-filter="all">All</a>
                        <a href="" className="portfolio-nav__filter" data-filter="app">App</a>
                        <a href="" className="portfolio-nav__filter" data-filter="website">Website</a>
                    </div>
                    <div className="portfolio-block__portfolio portfolio-content" ref={portfolioRef}>
                        <PortfolioList />
                    </div>
                    
                    {/* <div className="portfolio-block__portfolio portfolio-content" ref={portfolio}>
                        <div className="portfolio-content__column" data-category="website" >
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column" data-category="app">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/react-exchange-rates-img.webp" type="image/webp" />
                                        <img src="img/react-exchange-rates-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column" data-category="website">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column" data-category="app">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/react-exchange-rates-img.webp" type="image/webp" />
                                        <img src="img/react-exchange-rates-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column" data-category="website">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column" data-category="app">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/react-exchange-rates-img.webp" type="image/webp" />
                                        <img src="img/react-exchange-rates-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="portfolio-content__column non-visible" data-category="app" >
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/react-exchange-rates-img.webp" type="image/webp" />
                                        <img src="img/react-exchange-rates-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column non-visible" data-category="app">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/react-exchange-rates-img.webp" type="image/webp" />
                                        <img src="img/react-exchange-rates-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column non-visible" data-category="app">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/react-exchange-rates-img.webp" type="image/webp" />
                                        <img src="img/react-exchange-rates-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column non-visible" data-category="website">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column non-visible" data-category="website">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column non-visible" data-category="website">
                            <div className="portfolio-content__item portfolio-item">
                                <Link to="/portfolio" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </Link>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div> */}
                    <div className="portfolio-block__button portfolio-button">
                        <button type="button" className="portfolio-button__btn _btn" onClick={loadMoreWork}>load more work</button>
                    </div>
                </div>
            </section>

            <section className="page__about about-block _container">
                <div className="about-block__content">
                    <div className="about-block__picture">
                        <picture>
                            <source srcSet="img/logo-img.webp" type="image/webp" />
                            <img src="img/logo-img.png" alt="" />
                        </picture>
                    </div>
                    <div className="about-block__text about-text">
                        <h2 className="about-text__title">about me</h2>
                        <h3 className="about-text__subtitle">who am i</h3>
                        <div className="about-text__text">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus explicabo molestias debitis repudiandae commodi voluptatibus, itaque dolores alias repellendus amet numquam aliquid, magni laborum, cum non quos sunt reprehenderit illum?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, cumque quidem possimus enim in excepturi expedita obcaecati quae? Quibusdam libero adipisci eveniet obcaecati suscipit quas, consectetur repellat explicabo maiores sed!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, pariatur enim. Aspernatur a perspiciatis quia, omnis magnam impedit autem ipsum corrupti possimus obcaecati neque velit, dicta, blanditiis hic deleniti sed!</p>
                        </div>
                        <div className="about-text__button about-buttons">
                            <a href="" className="about-buttons__button _btn">HIRE ME</a>
                            <a href="" className="about-buttons__button _btn">SEE MY RESUME</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__certificates certificates-block _container">
                <div className="certificates-block__title certificates-title">
                    <h2 className="certificates-title__title">Certificates</h2>
                    <div className="certificates-title__text">My progress in learning Front-End Development</div>
                </div>
                <div className="certificates-block__content certificates-content">
                    <div className="certificates-content__column">
                        <div className="certificates-content__item">
                            <div className="certificates-content__certificate">
                                <time className="certificates-content__date">21 june<br/> 2020</time>
                                <a href="">
                                    <picture>
                                        <source srcSet="img/javascript-img.webp" type="image/webp" />
                                        <img src="img/javascript-img.png" alt="" />    
                                    </picture>
                                </a>
                            </div>
                            <div className="certificates-content__text">
                                
                                <h4 className="certificates-content__title"><a href="">JavaScript 2.0</a></h4>
                                <div className="certificates-content__category">JavaScript</div>
                                <div className="certificates-content__description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus ex eligendi, sequi totam, nam explicabo ea officiis officia voluptatem non, perferendis corrupti rerum impedit. Exercitationem distinctio ex ut expedita?</p>
                                </div>
                            </div>
                            <Link to="/certificates" className="certificates-content__button _btn">read more</Link>
                        </div>
                    </div>
                    <div className="certificates-content__column">
                    <div className="certificates-content__item">
                            <div className="certificates-content__certificate">
                                <time className="certificates-content__date">27 august<br/> 2020</time>
                                <a href="">
                                    <picture>
                                        <source srcSet="img/reactjs-lite-img.webp" type="image/webp" />
                                        <img src="img/reactjs-lite-img.png" alt="" />    
                                    </picture>
                                </a>
                            </div>
                            <div className="certificates-content__text">
                                
                                <h4 className="certificates-content__title"><a href="">React JS Lite Level</a></h4>
                                <div className="certificates-content__category">React JS</div>
                                <div className="certificates-content__description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus ex eligendi, sequi totam, nam explicabo ea officiis officia voluptatem non, perferendis corrupti rerum impedit. Exercitationem distinctio ex ut expedita?</p>
                                </div>
                            </div>
                            <Link to="/certificates" className="certificates-content__button _btn">read more</Link>
                        </div>
                    </div>
                    <div className="certificates-content__column">
                        <div className="certificates-content__item">
                            <div className="certificates-content__certificate">
                                <time className="certificates-content__date">15 august<br/> 2020</time>
                                <a href="">
                                    <picture>
                                        <source srcSet="img/javascript-oop-img.webp" type="image/webp" />
                                        <img src="img/javascript-oop-img.png" alt="" />    
                                    </picture>
                                </a>
                            </div>
                            <div className="certificates-content__text">
                                <h4 className="certificates-content__title"><a href="">ООП в JavaScript</a></h4>
                                <div className="certificates-content__category">JavaScript</div>
                                <div className="certificates-content__description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus ex eligendi, sequi totam, nam explicabo ea officiis officia voluptatem non, perferendis corrupti rerum impedit. Exercitationem distinctio ex ut expedita?</p>
                                </div>
                            </div>
                            <Link to="/certificates" className="certificates-content__button _btn">read more</Link>
                        </div>
                    </div>
                    <div className="certificates-content__column">
                    <div className="certificates-content__item">
                            <div className="certificates-content__certificate">
                                <time className="certificates-content__date">12 april<br/> 2021</time>
                                <a href="">
                                    <picture>
                                        <source srcSet="img/javascript-arrays-img.webp" type="image/webp" />
                                        <img src="img/javascript-arrays-img.png" alt="" />    
                                    </picture>
                                </a>
                            </div>
                            <div className="certificates-content__text">           
                                <h4 className="certificates-content__title"><a href="">Array methods in JavaScript</a></h4>
                                <div className="certificates-content__category">JavaScript</div>
                                <div className="certificates-content__description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus ex eligendi, sequi totam, nam explicabo ea officiis officia voluptatem non, perferendis corrupti rerum impedit. Exercitationem distinctio ex ut expedita?</p>
                                </div>
                            </div>
                            <Link to="/certificates" className="certificates-content__button _btn">read more</Link>
                        </div>
                    </div>
                    <div className="certificates-content__column">
                    <div className="certificates-content__item">
                            <div className="certificates-content__certificate">
                                <time className="certificates-content__date">13 august<br/> 2021</time>
                                <a href="">
                                    <picture>
                                        <source srcSet="img/reactjs-img.webp" type="image/webp" />
                                        <img src="img/reactjs-img.png" alt="" />    
                                    </picture>
                                </a>
                            </div>
                            <div className="certificates-content__text">
                                <h4 className="certificates-content__title"><a href="">React JS</a></h4>
                                <div className="certificates-content__category">React JS</div>
                                <div className="certificates-content__description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus ex eligendi, sequi totam, nam explicabo ea officiis officia voluptatem non, perferendis corrupti rerum impedit. Exercitationem distinctio ex ut expedita?</p>
                                </div>
                            </div>
                            <Link to="/certificates" className="certificates-content__button _btn">read more</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );


}

export default Main;