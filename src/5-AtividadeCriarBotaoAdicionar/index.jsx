// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import React, { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Manga', preco: 'R$ 70,00' },
    { id: 2, nome: 'Manwa', preco: 'R$ 80,00' },
    { id: 3, nome: 'Anime', preco: 'R$ 50,00' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto]);
  };
  return (
    <div>
      <h1>Anime de Fantasia e Isekai</h1>
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
        <h2>Meus Favoritos</h2>
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