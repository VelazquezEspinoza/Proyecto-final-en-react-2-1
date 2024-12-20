import React from 'react';

const Seccion = ({ titulo, contenido }) => {
  // Estilos en línea para la sección
  const sectionStyle = {
    backgroundColor: '#f9f9f9',  // Color de fondo suave
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',  // Bordes redondeados para suavizar el diseño
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',  // Sombra sutil
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  };

  const contentStyle = {
    fontSize: '1rem',
    color: '#555',  // Texto un poco más claro para el contenido
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>{titulo}</h2>
      <p style={contentStyle}>{contenido}</p>
    </section>
  );
};

export default Seccion;
