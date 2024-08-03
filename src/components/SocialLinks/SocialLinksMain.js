import React from 'react';

function SocialLinksMain(props) {

    return (
        <>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <picture>
                    <source srcSet={props.imageWebp} type="image/webp" />
                    <img src={props.imagePng} alt={props.altText} />
                </picture>
            </a>
        </>
    );
}

export default SocialLinksMain;