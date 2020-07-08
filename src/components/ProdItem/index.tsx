import React, { useState } from 'react';
import imgIndisponivel from '../../assets/indisponivel.png';
import './styles.css';
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';

function ProdItem({ produto }: { produto: any }) {

  const [counter, setCounter] = useState(1);

  function handleButtonPlusClick() {
    if (counter < 99) {
      setCounter(counter + 1);
    }
  }
  function handleButtonMinusClick() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div className="card">
      <div className="image">
        <img src={imgIndisponivel} />
        <img src={produto.IMAGEM} />
      </div>
      <div className="content">
        <div>
          <span className="text--rotulo">Nome : </span>
          <span className="title text--medium">
            {produto.DESCRICAO}
          </span>
        </div>

        <div>
          <span className="text--rotulo">Preço : </span>
          <span className="text--preco">R$ {produto.PROMOCAO > 0 ? produto.PROMOCAO : produto.PRECO}</span>
          <s className="text--desconto">R$ {produto.PROMOCAO > 0 ? produto.PROMOCAO : produto.PRECO}</s>
        </div>
      </div>
      <div className="quantidade">
        <a className="" onClick={handleButtonPlusClick}>
          <span className="add"><IoIosAddCircleOutline /></span>
        </a>

        <input type="text" value={counter} />

        <a className="" onClick={handleButtonMinusClick}>
          <span className="remove"><IoIosRemoveCircleOutline /></span>
        </a>
      </div>
    </div>
  );
}

export default ProdItem;
