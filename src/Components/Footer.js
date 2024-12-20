import React from 'react'; 

const Footer = () => {
  // Estilos en línea para el Footer
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    fontSize: '1rem',
    position: 'absolute',  // Cambié esto de 'relative' a 'absolute'
    bottom: '0',  // Esto asegura que el pie de página se quede en la parte inferior
    width: '100%',
  };

  // Estilo para el contenedor principal para asegurarse de que se estire a la altura de la pantalla
  const containerStyle = {
    minHeight: '100vh',  // Esto asegura que el contenido ocupe al menos toda la altura de la pantalla
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle}>
      {/* Aquí va el contenido principal de la página */}
      <div style={{ flex: 1 }}>
        {/* Contenido principal */}
      </div>
      <footer style={footerStyle}>
        <p>Nissan GT-R™ NISMO</p>
      </footer>
    </div>
  );
};

export default Footer;
 