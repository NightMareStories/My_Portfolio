import React from "react";
import {useSelector} from "react-redux";
import {selectSocialLinks} from "../../store/socialLinks/socialLinksSlice";
import SocialLinksFooter from "../../components/SocialLinks/SocialLinksFooter";

function SocialLinksFooterList() {
    const socialLinks = useSelector(selectSocialLinks);

//================================================
//= converting storage to an array for rendering =
    
    let data = [];

    Object.keys(socialLinks).map((item) => { 
        if (item === 'hire')
            for (let key in socialLinks[item]) {
                data.push(socialLinks[item][key]);
                
            }
        return data;
    });

//================================================

    return (
        <>
            {data.map(item => <li key={item.key} className="block-footer__social_link">
                <SocialLinksFooter dataId={item.dataId} link={item.link} imageWebp={item.imageWebp} imageSvg={item.imageSvg} altText={item.altText}/>
                </li>
            )}
        </>
    );
}

export default SocialLinksFooterList;