// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { 
      id: 1, nome: 'Manga', preco: 'R$ 70,00' 
    },
    { 
    id: 2, nome: 'Manwa', preco: 'R$ 80,00' 
  },
    { id: 3, nome: 'Anime', preco: 'R$ 50,00' }
  ]);

  return (
    <div>
         <h1>Manga de Fantasia e Isekai</h1>
         <div>
        {listaProdutos.map(produto => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
   
  );
}