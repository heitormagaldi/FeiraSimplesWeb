import React from 'react';

import './styles.css';

function ProdItem({ produto }) {
  return (
    <li className="prod-item">
      <header>
        <img src={produto.IMAGEM} alt={produto.NOME} />
        <div className="produto-info">
          <strong>{produto.NOME}</strong>  
          <span>{produto.PRECO}</span>
          <span>{produto.PROMOCAO}</span>

        </div>              
      </header>
      <p>{produto.DESCRICAO}</p>
      
    </li>

  );
}

export default ProdItem;
