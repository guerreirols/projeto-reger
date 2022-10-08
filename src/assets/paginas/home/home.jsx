import './home.css'

function Home() {
    return (
      <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
        </style>
        
        <div class = "corpo-home">
            <div>
               <img class = "imagem-volume" src='src\assets\imagens\volume.png'/>
            </div>          
            <div class = "menu-home">
                <ul class = "menu">
                    <li class = 'icone'>                              
                        <input class = "imagem-icone" type="image" src="src\assets\imagens\folha.png"/>
                        <h4 class = "titulo-icone" >O Projeto</h4>
                    </li>  
                    <li class = 'icone'>  
                        <input class = "imagem-icone" type="image" src="src\assets\imagens\folha.png" />  
                        <h4 class = 'titulo-icone' >O Que Fazemos</h4>
                    </li>  
                    <li class = 'icone'>  
                        <input class = "imagem-icone" type="image" src="src\assets\imagens\folha.png" /> 
                        <h4 class = 'titulo-icone' >Como Fazemos</h4>
                    </li>  
                </ul>  
                
                <ul class = "menu">
                    <li class = 'icone'>                              
                        <input class = "imagem-icone" type="image" src="src\assets\imagens\folha.png"/>
                        <h4 class = "titulo-icone" >Crescemos</h4>
                    </li>  
                    <li class = 'icone'>  
                        <input class = "imagem-icone" type="image" src="src\assets\imagens\folha.png" />  
                        <h4 class = 'titulo-icone' >Onde Estamos</h4>
                    </li>  
                    <li class = 'icone'>  
                        <input class = "imagem-icone" type="image" src="src\assets\imagens\folha.png" /> 
                        <h4 class = 'titulo-icone' >Dicas</h4>
                    </li>  
                </ul>          
            </div>          
        </div>
      </>
    )
  }
  
  export default Home