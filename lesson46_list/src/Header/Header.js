import React from "react";
import "./Header.scss";
import headerIcon from '../assets/icons/header__icon.svg';
import refreshIcon from '../assets/icons/refresh.svg'
import userIcon from '../assets/icons/user.svg'


export const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
            <img src={headerIcon} className="header__icon" alt="Icon"></img>
            <h1 className="header__title">~Posters Galore~</h1>
            <div className="header__icon-wrapper">
            <img src={refreshIcon} alt="Refresh Icon" className="header__icon"></img>
            <img src={userIcon} alt="User Icon" className="header__icon"></img>
            </div>
            </div>
        </header>
    )
}