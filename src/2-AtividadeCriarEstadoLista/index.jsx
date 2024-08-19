// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.


import React, { useState } from 'react';

export default function ProductList() {
    const [listaProdutos, setListaProdutos] = useState([
        {
             id: 1, nome: 'Manga', preco: 'R$ 70,00'
        },
        {
            id: 2, nome: 'Manwa', preco: 'R$ 80,00'
        },
        {
            id: 3, nome: 'Anime', preco: '50,00'
         }
    ]);

    return (
        <div>
            <h1>Lista de compra</h1>
            <ul>
                {listaProdutos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.preco}
                    </li>
                ))}
            </ul>
        </div>
    );
}

