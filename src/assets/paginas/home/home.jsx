import './home.css'

function Home() {
    return (
      <>
        <div class = "corpo-home">
            <div>
               <img class = "imagem-volume" src='src\assets\imagens\volume.png'/>
            </div>          
            <div class = "menu-home">
                <nav class = "menu">
                    <ul>
                        <li class = 'icone'>  
                            <input class = 'bola' type="image" src="src\assets\imagens\folha.png" />   
                            <p class = "titulo-icone">O Projeto</p>                  
                        </li>  
                        <li class = 'icone'>  
                            <input class = 'bola' type="image" src="src\assets\imagens\folha.png" />  
                            <p class = "titulo-icone">O Projeto</p> 
                        </li>  
                        <li class = 'icone'>  
                            <input class = 'bola' type="image" src="src\assets\imagens\folha.png" />  
                            <p class = "titulo-icone">O Projeto</p> 
                        </li>  
                        <li class = 'icone'>  
                            <input class = 'bola' type="image" src="src\assets\imagens\folha.png" />  
                            <p class = "titulo-icone">O Projeto</p>                    
                        </li>  
                        <li class = 'icone'>  
                            <input class = 'bola' type="image" src="src\assets\imagens\folha.png" /> 
                            <p class = "titulo-icone">O Projeto</p>  
                        </li>  
                        <li class = 'icone'>  
                            <input class = 'bola' type="image" src="src\assets\imagens\folha.png" />  
                            <p class = "titulo-icone">O Projeto</p>
                        </li>  
                    </ul>
                </nav>            
            </div>
        </div>
      </>
    )
  }
  
  export default Home