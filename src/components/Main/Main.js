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
                            <a href="" className="info-buttons__btn">HIRE ME</a>
                            <a href="" className="info-buttons__btn">SEE MY RESUME</a>
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
        </main>
    );


}

export default Main;