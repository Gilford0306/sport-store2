import React, { useState } from 'react';
import './Header.css'; 
import logo from '../assets/Logo-05.svg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <div className="logo">
         <img src={logo} alt="Planet Sports Logo"/>
      </div>
      <nav className="navigation">
        <NavLink label="Новинки" />
        <NavLink label="Чоловіки" />
        <NavLink label="Жінки" />
        <NavLink label="Діти" />
      </nav>
      <div className="header-right">
        {isLoggedIn ? (
          <>
            <div className="icons">
              <Icon type="heart" />
              <Icon type="cart" />
            </div>
            <UserProfile name="Ім'я Прізвище" />
          </>
        ) : (
          <>
            <button className="login-button" onClick={() => setIsLoggedIn(true)}>Войти</button>
            <button className="register-button">Зарегистрироваться</button>
          </>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ label }) => (
  <a href="#" className="nav-link">
    {label}
  </a>
);

const Icon = ({ type }) => (
  <div className={`icon icon-${type}`}>
    <i className={`fa fa-${type}`} />
  </div>
);

const UserProfile = ({ name }) => (
  <div className="user-profile">
    <span>{name}</span>
    <img src="path/to/profile-picture.jpg" alt="User Profile" />
  </div>
);

export default Header;
