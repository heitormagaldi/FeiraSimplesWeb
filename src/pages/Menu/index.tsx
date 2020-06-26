import React from 'react';
import { IoMdPin, IoMdPerson, IoMdHeartEmpty, IoIosCart } from 'react-icons/io';

import './styles.css';
const Menu = () => {
  return (
    <div id='div-menu'>
      <div className="container center">
        <nav className="menu">
          <h1 className="menu__logo">Feira Simples</h1>

          <div className="menu__right">
            <ul className="menu__list">
              <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Principal</a></li>
              <li className="menu__list-item"><a className="menu__link" href="#">Promoções</a></li>
              <li className="menu__list-item"><a className="menu__link" href="#">Categorias</a></li>
              <li className="menu__list-item"><a className="menu__link" href="#">App</a></li>
            </ul>

            <button className="menu__search-button"></button>

            <form className="menu__search-form hide" method="POST">
              <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
          </div>
        </nav>
      </div>
      <div className="container center">
        <div className="subMenu" id='sub-menu'>
          <a className="localizacao-a" href="/cadastro">
            <span className="localizacao-span"><IoMdPin /></span>
            <strong className="localizacao-strong"> teste 24</strong>
          </a>
          <ul className="subMenu__list">
            <li className="subMenu__list-item">
              <a className="user-a" href="/cadastro">
                <span className="user-span"><IoMdPerson /></span>
                <strong className="user-strong"> Heitor Magaldi</strong>
              </a>
            </li>
            <li className="subMenu__list-item">
              <a className="user-a" href="/cadastro">
                <span className="user-span"><IoMdHeartEmpty /></span>
                <strong className="user-strong">Favoritos</strong>
              </a>
            </li>
            <li className="subMenu__list-item">
              <a className="user-a" href="/cadastro">
                <span className="user-span"><IoIosCart /></span>
              </a>

            </li>

          </ul>


        </div>
      </div>
    </div >
  )
}

export default Menu;