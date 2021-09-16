import './Portfolio.scss';
import { Link as Link } from 'react-router-dom';
import React, { useState } from 'react';


function Portfolio(props) {
    const appRef = React.createRef();
    
    const openModal = (event) => { 
        event.preventDefault();
        document.body.classList.add('no-scroll'); //body scroll off when modal is open
        let data = appRef.current.getAttribute('data-app');
        props.setModal(data);
    }
    return (
        <>
        <div className={`portfolio-content__column ${props.cssHide}`} data-category={props.category} >
            <div className="portfolio-content__item portfolio-item" data-app={props.dataId} onClick={openModal} ref={appRef}>
                <Link to="/" className="portfolio-item__link">
                    <picture>
                        <source srcSet={props.imageWebp} type="image/webp" />
                        <img src={props.imagePng} alt={props.altText} />
                    </picture>
                </Link>
                <div className="portfolio-item__text portfolio-text">
                    <div className="portfolio-text__category">{props.category}</div>
                    <div className="portfolio-text__title">
                        {props.title}
                        <time className="portfolio-text__date" dateTime={props.date}>{props.date}</time>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Portfolio;