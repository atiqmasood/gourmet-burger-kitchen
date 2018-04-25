import React, { Component } from 'react';
import logo from '../assets/icons/logo.svg';
import profileImage from '../assets/images/default-user-pic.svg';
import '../app.css';


class Header extends Component {

    render() {
        return (
            <div>
                <div id="head" className="row header">

                    <a href="/" title="Chilango Ordering">
                        <img style={{marginLeft: '41rem'}} id="logo" className="header__logo" src={logo} alt="Chilango" />
                    </a>

                    <a href="/login" className="header__login-link">Login</a>

                    <div id="profileHolder" className="header__profile-wrapper">

                        <a href="/login">
                            <img id="profile" className="header__profile-img" src={profileImage} alt="profile picture" />
                        </a>
                        <a href="/login" className="header__profile-link">login</a>
                    </div>
                </div>
                <div className="row site-title" id="site_title">
                    <div className="title-wrapper" >
                        <h1 style={{marginLeft: '31rem', fontFamily: 'pdu'}} className="title-wrapper__title">order &amp; collect</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
