import './home.css'

function Home() {
    return (
      <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
        </style>
        
        <div class = "corpo-home">       
            <div class = "menu-home">
                <h1 class ="texto-explore">explore um pouco mais sobre o nosso projeto!</h1>
                <ul class = "menu">
                    <li class = 'icone'>
                        <a href="#o-projeto">
                            <input href="#o-projeto" class = "imagem-icone" type="image" src="src\assets\imagens\folha.png"/>
                        </a>                                      
                        <h4 class = "titulo-icone" >O Projeto</h4>
                    </li>  
                    <li class = 'icone'>  
                        <a href="#o-que-fazemos">
                            <input class = "imagem-icone" type="image" src="src\assets\imagens\ALVO.png" /> 
                        </a>                  
                        <h4 class = 'titulo-icone' >O Que Fazemos</h4>
                    </li>  
                    <li class = 'icone'>  
                        <a href="#como-fazemos">
                            <input class = "imagem-icone" type="image" src="src\assets\imagens\COMOFAZEMOS.png" />
                        </a>                 
                        <h4 class = 'titulo-icone' >Como Fazemos</h4>
                    </li>  
                </ul>  
                
                <ul class = "menu">
                    <li class = 'icone'>  
                        <a href="#crescemos">
                            <input class = "imagem-icone" type="image" src="src\assets\imagens\CRESCEMOS.png"/>
                        </a>                  
                        <h4 class = "titulo-icone" >Crescemos</h4>
                    </li>  
                    <li class = 'icone'>
                        <a href="#onde-estamos">
                            <input class = "imagem-icone" type="image" src="src\assets\imagens\ONDEESTAMOS.png" />
                        </a>          
                        <h4 class = 'titulo-icone' >Onde Estamos</h4>
                    </li>  
                    <li class = 'icone'>  
                        <a href="#dicas">
                            <input class = "imagem-icone" type="image" src="src\assets\imagens\LAMPADA.png" />
                        </a>       
                        <h4 class = 'titulo-icone' >Dicas</h4>
                    </li>  
                </ul>          
            </div>          
        </div>
      </>
    )
  }
  
  export default Home