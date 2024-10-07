<style>
    aside {
        height: 100vh;
        width: 28vw;
        background-color: #2A2A2A;
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        overflow: auto;
    }

    .button {
        background-color: #2A2A2A;
        color: #F3F3F3;
        padding: 1vw;
        font-family: aksans;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 3vw;
        border-radius: 2.2rem;
        width: 25vw;
        margin-left: 2vw;
        transition: background-color 0.3s ease;
    }

    .text-container {
        transition: transform 0.3s ease;
        display: flex;
    }

    .button:hover {
        background-color: #3F3F3F;
    }

    .button:hover .text-container {
        transform: translateX(5px);
    }

    
</style>
  
  <aside class="w-28 m-0 top-0 left-0 overflow-auto h-100 fixed">
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
  