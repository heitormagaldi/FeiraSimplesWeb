import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import List from '../List';
import Menu from '../Menu';
import Footer from '../Footer';

import './styles.css';

interface Categoria {
  ID: number,
  NOME: string;
}

const Home = () => {

  const [stateCategorias, setStateCategoria] = useState<Categoria[]>([]);
  useEffect(() => {

    async function loadCategorias() {
      const response = await api.get('/categorias');
      setStateCategoria(response.data);
    }
    loadCategorias();
  }, []);

  return (
    <>
      <Menu />
      <main>

        <section className="cards">
          <div>
            <List key={0} codigo={0} categoria={""} />
            {stateCategorias.map((categoria, i) => (
              <List key={i} codigo={categoria.ID} categoria={categoria.NOME} />
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Home;