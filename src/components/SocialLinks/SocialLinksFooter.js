import React from 'react';

function SocialLinksFooter(props) {

    return (
        <>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <picture>
                    <img src={props.imageSvg} alt={props.altText} />
                </picture>
            </a>
        </>
    );
}

export default SocialLinksFooter;