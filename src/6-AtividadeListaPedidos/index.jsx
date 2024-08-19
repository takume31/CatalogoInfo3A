// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

import React, { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Manga', preco: 'R$ 25,99' },
    { id: 2, nome: 'Manwa', preco: 'R$ 35,70' },
    { id: 3, nome: 'anime', preco: 'R$ 49,99' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto]);
  };

  return (
    <div>
      <h1>Manga, Manwa, Anime</h1>
      <div>
        {listaProdutos.map(produto => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarItemPedidos(produto)}>
            Adicionar aos Favoritos
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Meus vistos</h2>
        {listaPedidos.map((pedido, index) => (
          <div key={index}>
            <h3>{pedido.nome}</h3>
            <p>{pedido.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}