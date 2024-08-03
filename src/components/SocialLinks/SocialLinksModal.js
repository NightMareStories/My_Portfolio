import React from 'react';

function SocialLinksModal(props) {

    return (
        <>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <picture>
                    <source srcSet={props.imageWebp} type="image/webp" />
                    <img src={props.imagePng} alt={props.altText} className="social-contacts__link_icon" />
                </picture>
            </a>
        </>
    );
}

export default SocialLinksModal;