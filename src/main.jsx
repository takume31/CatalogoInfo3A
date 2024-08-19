import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Home from './1-AtividadeCriarComponente'
import SegundaAtividade from './2-AtividadeCriarEstadoLista'
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
        <Routes>
        <Router path='/app' element={<App/>}/>
              <Route path='/AtividadeCriarComponente' element={<Home/>}/>
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
