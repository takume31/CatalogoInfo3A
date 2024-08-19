import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrimeiraAtividade from './1-AtividadeCriarComponente/index'
import SegundaAtividade from './2-AtividadeCriarEstadoLista/index'
import TerceiraAtividade from './3-AtividadeListarObjetos'
import QuartaAtividade from './4-AtividadeCriarFuncaoAdicionar'
import QuintaAtividade from './5-AtividadeCriarBotaoAdicionar'
import SextaAtividade from './6-AtividadeListaPedidos'
import SetimaAtividade from './7-AtividadeFuncaoRemoverPedidos'
import OitavaAtividade from './8-AtividadeCriarBotaoRemover'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes element={<App/>} path='/'>
              <Route element={<PrimeiraAtividade/>} path='/primeiraAtividade'/>
              <Route element={<SegundaAtividade/>} path='/segundaAtividade'/>
              <Route element={<TerceiraAtividade/>} path='/terceiraAtividade'/>
              <Route element={<QuartaAtividade/>} path='/quartaAtividade'/>
              <Route element={<QuintaAtividade/>} path='/quintaAtividade'/>
              <Route element={<SextaAtividade/>} path='/sextaAtividade'/>
              <Route element={<SetimaAtividade/>} path='/setimaAtividade'/>
              <Route element={<OitavaAtividade/>} path='/oitavaAtividade'/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
