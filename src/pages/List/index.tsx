import React, { useState, useEffect } from 'react';
import api from '../../services/api';


import './styles.css';

import ProdItem from '../../components/ProdItem';

interface ListProps {
  codigo: number;
  categoria: string;
}

//const List: React.FC<HomeProps> = (props) => {
const List: React.FC<ListProps> = (props) => {

  const [stateProdutos, setStateProdutos] = useState([]);
  const [stateRotulo, setStateRotulo] = useState("");


  useEffect(() => {
    async function loadProdutos() {

      let response;
      console.log(props.codigo);
      if (props.codigo == 0) {
        setStateRotulo("Promoção");
      }
      else {
        setStateRotulo(props.categoria);
        
      }
      response = await api.get(`categorias/${props.codigo}`);
      setStateProdutos(response.data);
    }

    /*  //ainda nao utilizei.
      async function verificaImagem({imagem} : {imagem:string}) {
        let retorno;
    
        const apiResponse = await api.get(imagem)
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });
      }*/

    loadProdutos();
  }, []);

  return (

    <div className="groupCards">
      <div className='headerCards'>
        <span>{stateRotulo}</span>
      </div>
      <div className="cards">
        {stateProdutos.map((produto, i) => (
          <ProdItem key={i} produto={produto} />
        ))}
      </div>
    </div>
  )
}
export default List;
