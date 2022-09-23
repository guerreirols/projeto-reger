import { useState } from 'react'
import './App.css'
import Home from './assets/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <body>
          <div>
            <div class = 'logo'>
              <Home/>
            </div>
            
            <nav class = 'menu'>  
              <ul>  
                <li class = 'botao'>  
                  <input class = 'bola' type="image" src="src\imagens\BOTAO1.png" />                     
                </li>  
                <li class = 'botao'>  
                  <input class = 'bola' type="image" src="src\imagens\BOTAO2.png"/>  
                </li>  
                <li class = 'botao'>  
                  <input class = 'bola' type="image" src="src\imagens\BOTAO3.png"/>  
                </li>  
                <li class = 'botao'> 
                  <input class = 'bola' type="image" src="src\imagens\BOTAO4.png"/>  
                </li>  
                <li class = 'botao'>  
                  <input class = 'bola' type="image" src="src\imagens\BOTAO5.png"/>  
                </li>  
                <li class = 'botao'>  
                  <input class = 'bola' type="image" src="src\imagens\BOTAO6.png"/>  
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
