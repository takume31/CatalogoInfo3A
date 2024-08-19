// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`
import { useState } from "react";
import "/src/globals.css";

export default function Home() {
    const [listaProdutos, setProdutos] = useState([
      { id: 1, nome: 'Manga', preco: 'R$ 70,00' },
      { id: 2, nome: 'Manwa', preco: 'R$ 80,00' },
      { id: 3, nome: 'Anime', preco: 'R$ 50,00' }
    ]);

    const [listaPedidos, setPedidos] = useState([]);

    const adicionarProdutoPedido = (produto) => {  
        setPedidos([...listaPedidos, produto]);
    }
    console.table(listaPedidos);
    const removeritem = (id) => {  
        let listaAux = listaPedidos.filter((pedido)=> pedido.id !== id);
        setPedidos(listaAux)
    }
    console.table(listaPedidos);
    return (
        <div className="bloco-principal" >
            <div className="bloco-produtos">
                {
                  listaProdutos.map((produto)=> 
                      <div key={produto.id}>
                             <img src={produto.imagem}/>
                            <p> { produto.item} </p>
                            <button onClick={() => adicionarProdutoPedido(produto)}>
                            Adicionar aos Favoritos
                            </button>
                      </div>
                  )}
                  
                      </div>
                      <div className="bloco-pedidos">
                          <p>Meus Favoritos</p>
                          {listaPedidos.map((pedido, index) => 
                              <div key={index}>
                                  <td>
                                    {pedido.item}
                                    </td>
                                  <td>
                                     {pedido.preco}
                                     </td>
                              <td>
                                <button onClick={() => removeritem(pedido.id)}>Remover</button>
                              </td>
                              </div>
                          )}


                      </div>
                  </div>           
    );
}
