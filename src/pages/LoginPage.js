import React from 'react';
import './LoginPage.css'
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

const LoginPage = () => {
    return (
        <div className="email-input-container">
            <h2>Вкажіть адресу електронної пошти та пароль щоб увійти .</h2>
            <input type="email" placeholder="Ел. пошта" className="email-input" />
            <input type="password" placeholder="Пароль" className="email-input" />
            {/* <p>
                Продовжуючи, я приймаю <a ><Link to="/privacy-policy">Політику конфіденційності</Link></a> та <a><Link to={"/terms-of-uses"}> Умови використання</Link> </a>.
            </p> */}
            <div className="button-container">

                <Button color="blue" text="Продовжити" href="/" />
            </div>
        </div>
    );
};
export default LoginPage;
