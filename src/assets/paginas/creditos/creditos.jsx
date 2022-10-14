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
              <h1 class="creditos-titulo">Créditos</h1>
              <div class="desenvolvedores">
                  <h2 class="dev-titulo">Desenvolvedores</h2>
                  <h3 class="dev">André Roberto Salvador</h3>
                  <h3 class="dev">Amanda Pavão Bonito Teixeira</h3>           
                  <h3 class="dev">Bruno Dias Esquerdo Béu</h3>
                  <h3 class="dev">Bruno Ventura Santorsula</h3>
                  <h3 class="dev">José Adauto Bolini Junior</h3>
                  <h3 class="dev">Leonardo de Oliveira Salvador</h3>
                  <h3 class="dev">Lucas Guerreiro de Souza</h3>
                  <h3 class="dev">Mateus Oliver Pierim</h3>
              </div>
              <div class="orientadores">
                  <h2 class="ori-titulo">Orientadores</h2>
                  <h3 class="ori">Vinicius Santos Andrade</h3>
                  <h3 class="ori">Sileide Paccola</h3>           
              </div>
          </div>
        </section>        
      </>
    )
  }
  
  export default Creditos