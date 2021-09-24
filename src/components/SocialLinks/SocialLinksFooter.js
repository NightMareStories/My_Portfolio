import React, {useState} from "react";

function SocialLinksFooter(props) {
//img className="social-contacts__link_icon"
    return (
        <>
            <a href={props.link}>
                <picture>
                    {/* <source srcSet={props.imageWebp} type="image/webp" /> */}
                    <img src={props.imageSvg} alt={props.altText} />
                </picture>
            </a>
        </>
    );
}

export default SocialLinksFooter;