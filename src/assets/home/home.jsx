import './home.css'


function Home(){
    return(
        <body>
            <img class = 'sombra'/>
            <div>
                <img class = 'logo' src='src\imagens\REGER-CAPA.png'/>
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
    )
}

export default Home