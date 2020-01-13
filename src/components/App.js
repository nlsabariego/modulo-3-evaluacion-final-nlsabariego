import React from "react";

function App() {
  return (
    <div>
      <header>
        <img src='../images/logo.png' alt='Rick and Morty' />
      </header>
      <body>
        <input type='text' placeholder='Busca aquí el personaje' className='form__input-text' />
        <ul className='cards'>
          <li className='card'>
            <img src='../images/logo.png' alt='' className='card_img' />
            <p className='card__description'>Nombre</p>
            <p className='card__description'>Especie</p>
          </li>
        </ul>
      </body>
    </div>
  );
}

export default App;
