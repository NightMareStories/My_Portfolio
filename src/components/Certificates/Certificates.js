import './Certificates.scss';
import { Link as Link } from 'react-router-dom';
import React, { useState } from 'react';


function Certificates(props) {
    // const appRef = React.createRef();
    

    // const openApp = (event) => { 
    //     event.preventDefault();
    //     document.body.classList.add('no-scroll'); //body scroll off when modal is open
    //     let data = appRef.current.getAttribute('data-app');
    //     props.setModal(data);
    // }
    return (
        <>
       
               
                    <div className="certificates-content__column">
                        <div className="certificates-content__item">
                            <div className="certificates-content__certificate">
                                <time className="certificates-content__date">{props.date}</time>
                                <a href="">
                                    <picture>
                                        <source srcSet={props.imageWebp} type="image/webp" />
                                        <img src={props.imagePng} alt="" />    
                                    </picture>
                                </a>
                            </div>
                            <div className="certificates-content__text">
                                
                                <h4 className="certificates-content__title"><a href="">{props.title}</a></h4>
                                <div className="certificates-content__category">{props.category}</div>
                                <div className="certificates-content__description">
                                    {props.description}
                                </div>
                            </div>
                            <Link to="" className="certificates-content__button _btn">read more</Link>
                        </div>
                    </div>
                
           
        
        {/* <div className={`portfolio-content__column ${props.cssHide}`} data-category={props.category} >
            <div className="portfolio-content__item portfolio-item" data-app={props.dataId} onClick={openApp} ref={appRef}>
                <Link to="" className="portfolio-item__link">
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
        </div> */}
    </>
    );
}

export default Certificates;