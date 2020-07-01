import React from 'react';
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io';
import Grid from '@material-ui/core/Grid';

import './styles.css';
const Footer = () => {
  return (
    <div id='div-footer'>
      <div className="footerContainer center">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className="footer__logo">Feira Simples</h1>
          </Grid>
          <Grid item xs={10}>
            <span className="footer__bottom">Deixe sua feira conosco ;D</span>
          </Grid>

        </Grid>




        <nav className="footer">
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
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
            
              <a className="footer_icon" href="/cadastro">
                <span className=""><IoLogoFacebook /></span>
              </a>

              <a className="footer_icon" href="/cadastro">
                <span className=""><IoLogoInstagram /></span>
              </a>

            </Grid>
          </Grid>
       

      </div>
    </div >
  )
}

export default Footer;