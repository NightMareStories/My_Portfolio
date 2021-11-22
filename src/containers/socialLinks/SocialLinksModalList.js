import React from "react";
import {useSelector} from "react-redux";
import {selectSocialLinks} from "../../store/socialLinks/socialLinksSlice";
import SocialLinksModal from "../../components/SocialLinks/SocialLinksModal";

function SocialLinksModalList(props) {
    const socialLinks = useSelector(selectSocialLinks);

//================================================
//= converting storage to an array for rendering =
    
    let data = [];

    Object.keys(socialLinks).map((item) => { 
        if (item === props.modal)
            for (let key in socialLinks[item]) {
                data.push(socialLinks[item][key]);
                
            }
        return data;
    });

//================================================

    return (
        <>
            {data.map(item => <li key={item.key} className="social-contacts__link">
                <SocialLinksModal dataId={item.dataId} link={item.link} imageWebp={item.imageWebp} imagePng={item.imagePng} altText={item.altText} modal={props.modal} setModal={props.setModal}/>
                </li>
            )}
        </>
    );
}

export default SocialLinksModalList;