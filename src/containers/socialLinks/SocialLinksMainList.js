import React from "react";
import {useSelector} from "react-redux";
import {selectSocialLinks} from "../../store/socialLinks/socialLinksSlice";
import SocialLinksMain from "../../components/SocialLinks/SocialLinksMain";

function SocialLinksMainList() {
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
            {data.map(item => <li key={item.key} className="social-links__link">
                <SocialLinksMain dataId={item.dataId} link={item.link} imageWebp={item.imageWebp} imagePng={item.imagePng} altText={item.altText}/>
                </li>
            )}
        </>
    );
}

export default SocialLinksMainList;