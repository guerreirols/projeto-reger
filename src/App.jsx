import './App.css'
import './secoes.css'
import Home from './assets/paginas/home/home'
import Oprojeto from './assets/paginas/o_projeto/o_projeto'
import Oquefazemos from './assets/paginas/o_que_fazemos/o_que_fazemos'
import Comofazemos from './assets/paginas/como_fazemos/como_fazemos'
import Crescemos from './assets/paginas/crescemos/crescemos'
import Ondeestamos from './assets/paginas/onde_estamos/onde_estamos'
import Dicas from './assets/paginas/dicas/dicas'

function App() {
  return (
    <>
      <main>
        <Home/>
        <Oprojeto/>
        <Oquefazemos/>
        <Comofazemos/>
        <Crescemos/>
        <Ondeestamos/>
        <Dicas/>
      </main>
    </>
  )
}

export default App
