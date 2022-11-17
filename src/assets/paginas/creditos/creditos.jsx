import './creditos.css'

function Creditos() {
    return (
      <>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap'); 
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&display=swap');
        </style>

        <section class="rodape-geral">
          <div class="rodape">        
              <div class="desenvolvedores">     
                <div class="cc">
                  <h2 class="creditos-titulo">Um site desenvolvido por:</h2> 
                  <h3 class="c-titulo">Ciência da Computação</h3>
                  <h3 class="dev">André Roberto Salvador</h3>                
                  <h3 class="dev">Bruno Ventura Santorsula</h3>
                  <h3 class="dev">José Adauto Bolini Junior</h3>
                  <h3 class="dev">Leonardo de Oliveira Salvador</h3>
                  <h3 class="dev">Lucas Guerreiro de Souza</h3>
                  <h3 class="dev">Mateus Oliver Pierim</h3>
                </div>
                <div class="design">                
                  <h3 class="c-titulo">Design</h3>
                  <h3 class="dev">Amanda Pavão Bonito Teixeira</h3>  
                  <h3 class="dev">Bruno Dias Esquerdo Béu</h3>
                  <h2 class="c-titulo">Orientadores</h2>
                  <h3 class="ori">Vinicius Santos Andrade (Ciência da Computação)</h3>
                  <h3 class="ori">Sileide Paccola (Design)</h3>
                </div>                                               
              </div>
              <img class="reger-logo" src='assets\imagens\REGER-CAPA.png'/>
          </div>
        </section>        
      </>
    )
  }
  
  export default Creditos