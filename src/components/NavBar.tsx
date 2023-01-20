import React from 'react'

import NavigationList from './NavigationList';

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="NavBarName">
                <a className="NameHomeLink" href="/">Carson Brando</a>
            </div>
            <div className="NavigationListContainer">
                <NavigationList />
            </div>
        </div>
    )
}

export default NavBar
