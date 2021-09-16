import './Certificates.scss';
import { Link as Link } from 'react-router-dom';
import React, { useState } from 'react';


function Certificates(props) {
    const covRef = React.createRef();
    

    const openModal = (event) => { 
        event.preventDefault();
        document.body.classList.add('no-scroll'); //body scroll off when modal is open
        let data = covRef.current.getAttribute('data-app');
        props.setModal(data);
    }
    return (
        <>
            <div className="certificates-content__column">
                <div className="certificates-content__item" data-app={props.dataId}  ref={covRef}>
                    <div className="certificates-content__certificate" onClick={openModal}>
                        <time className="certificates-content__date">{props.date}</time>
                        <Link to="/">
                            <picture>
                                <source srcSet={props.imageWebp} type="image/webp" />
                                <img src={props.imagePng} alt={props.altText} />    
                            </picture>
                        </Link>
                    </div>
                    <div className="certificates-content__text">                             
                        <h4 className="certificates-content__title" ><Link to="/" onClick={openModal}>{props.title}</Link></h4>
                        <div className="certificates-content__category">{props.category}</div>
                        <div className="certificates-content__description">
                            {props.description}
                        </div>
                    </div>
                    <Link to="/" className="certificates-content__button _btn" onClick={openModal}>read more</Link>
                </div>
            </div>
        </>
    );
}

export default Certificates;