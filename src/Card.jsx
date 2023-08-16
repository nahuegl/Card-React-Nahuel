import React from 'react';

function Card({ name, colorHex }) {
  return (
    <div className="card">
      <h2>Hola, {name}! Sabemos que tu color favorito es:</h2>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: colorHex,
          borderRadius: '50%',
          margin: '10px auto',
        }}
      ></div>
      <p>{colorHex}</p>
    </div>
  );
}

export default Card;


