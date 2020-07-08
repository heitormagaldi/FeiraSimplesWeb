import React from 'react';
import {
  IoMdPin,
  IoMdPerson,
  IoMdHeartEmpty,
  IoIosCart,
  IoIosSearch,
  IoIosPhonePortrait
} from 'react-icons/io';

import './styles.css';
import './responsive.css';
import { Container } from '@material-ui/core';

const Menu = () => {

  let show = true;

  const menuSection = document.querySelector(".menu-section")
  const menuToggle = menuSection?.querySelector(".menu-toggle")

  menuToggle?.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection?.classList.toggle("on", show)
    show = !show;
  })

  return (
    <header >
      <div className="container">
        <img
          src="https://feirasimples.com.br/assets/images/logo/feirasimpleslogo5.png"
          alt="Rocketseat"
        />

        <div className="menu-section">
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <input type="text" />
                <a href="#">
                  <span><IoIosSearch /></span>
                </a>
              </li>

              <li>
                <a className="" href="/cadastro">
                  <span className=""><IoIosPhonePortrait /></span>
                  <strong className="">Baixar APP</strong>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container2">
        <a className="localizacao-a" href="/cadastro">
          <span className="localizacao-span"><IoMdPin /></span>
          <strong className="localizacao-strong"> teste 24</strong>
        </a>
        <div className="menu-subsection">
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/cadastro">
                  <span><IoMdPerson /></span>
                  <strong> Heitor Magaldi</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  <span><IoMdHeartEmpty /></span>
                  <strong>Favoritos</strong>
                </a>
              </li>
              <li>
                <a href="">
                  <span ><IoIosCart /></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>


    </header>





    /*
    
    <header id='header'>
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
    </header>*/
  )
}

export default Menu;