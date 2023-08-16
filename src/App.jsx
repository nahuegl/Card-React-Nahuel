import React, { useState } from 'react';
import './index.css'; // Asegúrate de tener el archivo de estilos si lo necesitas
import Card from './Card'; // Importa el componente Card

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.length < 3 || input1.trim() !== input1 || !/^[a-zA-Z\s]*$/.test(input1)) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (!/^#[0-9A-Fa-f]{6}$/.test(input2)) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setError('');
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Ingresa tu color favorito (formato HEX)"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {input1 && input2 && !error && <Card name={input1} colorHex={input2} />}
    </div>
  );
}

export default App;
