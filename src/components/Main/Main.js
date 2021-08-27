import './Main.scss';
// import '../../css/components/Main/Main.css';


function Main() {
    return (
        <main className="page">
            <section className="page__intro intro-block _container">
                <div className="intro-block__content">
                    <div className="intro-block__info info-block">
                        <div className="info-block__subtitle"><h2>Hello, I'm</h2></div>
                        <div className="info-block__title"><h1>Poteryaev Aleksandr</h1></div>
                        <div className="info-block__text">Front-End Developer</div>
                        <div className="info-block__social social-links">
                            <a href="" className="social-links__link">
                                <picture>
                                    <source srcSet="img/telegram-icon.webp" type="image/webp" />
                                    <img src="img/telegram-icon.png" alt="" />
                                </picture>
                            </a>
                            <a href="" className="social-links__link">
                                <picture>
                                    <source srcSet="img/whatsapp-icon.webp" type="image/webp" />
                                    <img src="img/whatsapp-icon.png" alt="" />
                                </picture>
                            </a>
                            <a href="" className="social-links__link">
                                <picture>
                                    <source srcSet="img/gmail-icon.webp" type="image/webp" />
                                    <img src="img/gmail-icon.png" alt="" />
                                </picture>
                            </a>
                            <a href="" className="social-links__link">
                                <picture>
                                    <source srcSet="img/yandex-icon.webp" type="image/webp" />
                                    <img src="img/yandex-icon.png" alt="" />
                                </picture>
                            </a>
                        </div>
                        <div className="info-block__buttons info-buttons">
                            <a href="" className="info-buttons__button _btn">HIRE ME</a>
                            <a href="" className="info-buttons__button _btn">SEE MY RESUME</a>
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
                    <div className="portfolio-block__nav portfolio-nav">
                        <a href="" className="portfolio-nav__filter">All</a>
                        <a href="" className="portfolio-nav__filter">App</a>
                        <a href="" className="portfolio-nav__filter">Website</a>
                    </div>
                    <div className="portfolio-block__portfolio portfolio-content">
                        <div className="portfolio-content__column">
                            <div className="portfolio-content__item portfolio-item">
                                <a href="" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </a>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column">
                            <div className="portfolio-content__item portfolio-item">
                                <a href="" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </a>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column">
                            <div className="portfolio-content__item portfolio-item">
                                <a href="" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </a>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column">
                            <div className="portfolio-content__item portfolio-item">
                                <a href="" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </a>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column">
                            <div className="portfolio-content__item portfolio-item">
                                <a href="" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </a>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-content__column">
                            <div className="portfolio-content__item portfolio-item">
                                <a href="" className="portfolio-item__link">
                                    <picture>
                                        <source srcSet="img/sport-shop-img.webp" type="image/webp" />
                                        <img src="img/sport-shop-img.png" alt="" />
                                    </picture>
                                </a>
                                <div className="portfolio-item__text portfolio-text">
                                    <div className="portfolio-text__category">Category</div>
                                    <div className="portfolio-text__title">
                                        Title
                                        <time className="portfolio-text__date" dateTime="">Date</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-block__button portfolio-button">
                        <button type="button" className="portfolio-button__btn _btn">load more work</button>
                    </div>
                </div>
            </section>
        </main>
    );


}

export default Main;