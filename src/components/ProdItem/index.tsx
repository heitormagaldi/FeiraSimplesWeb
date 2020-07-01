import React from 'react';

import './styles.css';

function ProdItem({ produto }: { produto: any }) {
  return (
    <div className="card">
      <div className="image">
        
        <img src={produto.IMAGEM}/>


      </div>
      <div className="content">
        <p className="title text--medium">
          {produto.DESCRICAO}
        </p>
        <div className="info">
          <p className="text--medium">{produto.PROMOCAO}</p>
          <p className="price text--medium">{produto.PRECO}</p>
        </div>
      </div>
    </div>
  );
}

export default ProdItem;
