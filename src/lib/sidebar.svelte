
  <style>
    .button {
        background-color: #2A2A2A;
        color: #F3F3F3;
        padding: 1vw;
        font-family: aksans;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 1vw;
        margin-left: 2vw;
        border-radius: 2.2rem; /* Bordes redondeados */
        width: 25vw;
        transition: background-color 0.3s ease; /* Transición suave */
        
    }
    .text-container {
        transition: transform 0.3s ease; /* Transición suave solo para el texto */
        display: flex; /* Asegura que el texto ocupe solo el espacio necesario */
    }
    .button:hover {
        background-color: #3F3F3F; /* Color de fondo al pasar el mouse */
        margin-left: 2vw;
        
    }
    .button:hover .text-container {
        transform: translateX(5px); /* Mueve el texto a la derecha al hacer hover */
        
    }


    
</style>
  
  <aside class="" style="width: 28vw; background-color: #2A2A2A; padding-top: 2vw;">
      <button class="button">
          <img alt="Icono" src="./avanzado.svg" style="height: 3vw; display: inline-block; padding-right: 3vw;"/>
          <div class="text-container">Avanzado</div>
      </button>
      <button class="button">
          <img alt="Icono" src="principal.svg" style="height: 3vw; display: inline-block; padding-right: 3vw; "/>
          <div class="text-container">Principal</div>
      </button>
      <button class="button">
          <img alt="Icono" src="mapa.svg" style="height: 3vw; display: inline-block; padding-right: 3vw; "/>
          <div class="text-container">Mapa</div>
      </button>
      <button class="button">
          <img alt="Icono" src="./lugares.svg" style="height: 3vw; display: inline-block; padding-right: 3vw; "/>
          <div class="text-container">Lugares</div>
      </button>
      <button class="button">
          <img alt="Icono" src="./cuenta.svg" style="height: 3vw; display: inline-block; padding-right: 3vw; "/>
          <div class="text-container">Cuenta</div>
      </button>
  </aside>
  