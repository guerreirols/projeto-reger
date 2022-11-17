import './App.css'
import './secoes.css'
import Home from './assets/paginas/home/home'
import Oprojeto from './assets/paginas/o_projeto/o_projeto'
import Oquefazemos from './assets/paginas/o_que_fazemos/o_que_fazemos'
import Comofazemos from './assets/paginas/como_fazemos/como_fazemos'
import Crescemos from './assets/paginas/crescemos/crescemos'
import Ondeestamos from './assets/paginas/onde_estamos/onde_estamos'
import Dicas from './assets/paginas/dicas/dicas'
import Creditos from './assets/paginas/creditos/creditos'
import Header from './assets/paginas/header/header'

function App() {
  return (
    <>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=M+PLUS+Rounded+1c:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=M+PLUS+Rounded+1c:wght@700&family=Nunito:wght@600&family=Roboto+Condensed:ital,wght@0,400;1,700&display=swap');
      </style>

      <main>
        <Header/>
        <Home/>
        <Oprojeto/>
        <Oquefazemos/>
        <Comofazemos/>
        <Crescemos/>
        <Ondeestamos/>
        <Dicas/>
        <Creditos/>
      </main>
    </>
  )
}

export default App
