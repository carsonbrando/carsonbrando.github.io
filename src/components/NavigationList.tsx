import React from 'react';

import { navigationList } from '../constants/Constants';

import './NavigationList.css';

const NavigationList = () => {
    return (
        <div className="NavigationList">
            {navigationList.map((navigationItem, key) => {
                return (
                    <span className="NavigationItem">
                        <a className="NavigationLink" href={"/" + navigationItem}>
                            {/* <span className="Navigation-item-index">{key+1}. </span> */}
                            <span className="NavigationItemTitle">{navigationItem}</span>
                        </a>
                    </span>
                )}
            )}
        </div>
    )
}

export default NavigationList
