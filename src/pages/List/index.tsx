import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';

import './styles.css';

import ProdItem from '../../components/ProdItem';

interface ListProps {
  produtos: object[];
}

//const List: React.FC<HomeProps> = (props) => {
const List = () => {

  const [stateProdutos, setStateProdutos] = useState([]);

  useEffect(() => {
    async function loadProdutos() {
      const response = await api.get('/produtos');
      console.log(response);
      setStateProdutos(response.data);
    }
    loadProdutos();
  }, []);

  return (

    <div id='page-list'>
      <div className="container center">
        <main>
          <ul>
            {stateProdutos.map((produto, i) => (
              <ProdItem key={i} produto={produto} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}
export default List;