import React from 'react';
import { IoMdPin, IoMdPerson, IoMdHeartEmpty, IoIosCart } from 'react-icons/io';

import './styles.css';
const Footer = () => {
  return (
    <div id='div-footer'>
      <div className="footerContainer center">
        <nav className="footer">
          <h1 className="footer__logo">Feira Simples</h1>
          <span className="footer__bottom">Deixe sua feira conosco ;D</span>

          <div className="footer__right">
            <ul className="">
              <li className="footer__list-item"><a className="footer__link " href="#">Principal</a></li>
              <li className="footer__list-item"><a className="footer__link " href="#">Principal</a></li>
              <li className="footer__list-item"><a className="footer__link" href="#">Promoções</a></li>
              <li className="footer__list-item"><a className="footer__link" href="#">Categorias</a></li>
              <li className="footer__list-item"><a className="footer__link" href="#">App</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div >
  )
}

export default Footer;