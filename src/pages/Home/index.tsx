import React from 'react';

import List from '../List';
import Menu from '../Menu';
import Footer from '../Footer';

import './styles.css';
const Home = () => {
  return (
    <>
    <Menu />
    <main>
    <section className="cards">
      <List />
      </section>
    </main>
    <Footer />
  </>
  )
}

export default Home;