import { useState } from 'react'
import './App.css'
import Comofazemos from './assets/como_fazemos/como_fazemos'
import Crescemos from './assets/crescemos/crescemos'
import Dicas from './assets/dicas/dicas'
import Home from './assets/home/home'
import Ondeestamos from './assets/onde_estamos/onde_estamos'
import Oprojeto from './assets/o_projeto/o_projeto'
import Oquefazemos from './assets/o_que_fazemos/o_que_fazemos'

function App() {

  const [idConteudo, mudarConteudo] = useState(0)
  
  return (
    <>
      <main>
        <body>
          <div>
            <div class = 'logo'>
              {
                {
                  0: <Home/>,
                  1: <Oprojeto/>,
                  2: <Oquefazemos/>,
                  3: <Comofazemos/>,
                  4: <Crescemos/>,
                  5: <Ondeestamos/>,
                  6: <Dicas/>
                }[idConteudo]
              }            
            </div>     
            <nav class = 'menu'>  
              <ul>  
                <li class = 'botao'>  
                  <input onClick={() => mudarConteudo(1)} class = 'bola' type="image" src="src\imagens\BOTAO1.png" />                     
                </li>  
                <li class = 'botao'>  
                  <input onClick={() => mudarConteudo(2)} class = 'bola' type="image" src="src\imagens\BOTAO2.png"/>  
                </li>  
                <li class = 'botao'>  
                  <input onClick={() => mudarConteudo(3)} class = 'bola' type="image" src="src\imagens\BOTAO3.png"/>  
                </li>  
                <li class = 'botao'> 
                  <input onClick={() => mudarConteudo(4)} class = 'bola' type="image" src="src\imagens\BOTAO4.png"/>  
                </li>  
                <li class = 'botao'>  
                  <input onClick={() => mudarConteudo(5)} class = 'bola' type="image" src="src\imagens\BOTAO5.png"/>  
                </li>  
                <li class = 'botao'>  
                  <input onClick={() => mudarConteudo(6)} class = 'bola' type="image" src="src\imagens\BOTAO6.png"/>  
                </li> 
              </ul>  
            </nav>  
          </div>
        </body>       
      </main>
    </>
  )
}

export default App
