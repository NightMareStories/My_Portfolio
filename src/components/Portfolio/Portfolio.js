import './Portfolio.scss';
import { Link as Link } from 'react-router-dom';
import React, { useState } from 'react';


function Portfolio(props) {
    const portfolio = React.createRef();

    
    return (
        <>
        <div className={`portfolio-content__column ${props.cssHide}`} data-category={props.category}>
            <div className="portfolio-content__item portfolio-item">
                <Link to="/portfolio" className="portfolio-item__link">
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