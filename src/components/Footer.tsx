import React from 'react';

import SocialMediaIcon from "./SocialMediaIcon";
import { SocialMediaInfo, socialMediaList } from "../constants/Constants";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterCopy">
                &copy; 2023 Carson Brando
            </div>
            <div className="FooterSocial">
                {socialMediaList.map((socialMedia: SocialMediaInfo, index) => {
                    return <SocialMediaIcon {...socialMedia} />
                })}
            </div>
        </div>
    )
}

export default Footer