import React from 'react';

// import SvgIcon from "./SvgIcon";
import  { SocialMediaInfo } from "../constants/Constants";

import "./SocialMediaIcon.css";

const SocialMediaIcon: React.FC<SocialMediaInfo> = (socialMedia: SocialMediaInfo) => {
    const { name, icon, url } = socialMedia;

    const iconSrc = require(`../media/icons/${icon}`);

    return (
        <div className="SocialMediaIcon">
            <div className={`SocialMedia ${name}`}>
                <a className="SocialMediaLink" href={url}>
                    <img className="SocialMediaImage" src={iconSrc} />
                </a>
            </div>
        </div>
    )
}

export default SocialMediaIcon
