import React from 'react';

import List from '../List';
import Menu from '../Menu';
import Footer from '../Footer';

import './styles.css';
const Home = () => {
  return (
    <>
    <Menu />
    <div id="app">
      <List />
    </div>
    <Footer />
  </>
  )
}

export default Home;