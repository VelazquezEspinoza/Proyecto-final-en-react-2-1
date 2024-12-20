import React from 'react'; 

const Header = () => {
  const headerStyle = {
    backgroundColor: '#333', // Cambiado de blanco a gris oscuro para mayor contraste
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra con más contraste
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff', // Cambiado a blanco para contrastar con el fondo oscuro
    letterSpacing: '2px',
  };

  const navListStyle = {
    display: 'flex',
    listStyle: 'none',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: '#fff', // Color de los enlaces cambiado a blanco para contrastar con el fondo oscuro
    marginLeft: '20px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const navLinkHoverStyle = {
    color: '#007bff', // Color azul cuando pasa el mouse
  };

  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>Nissan nismo</h1>
      <nav>
        <ul style={navListStyle}>
          <li>
            <a 
              href="/" 
              style={navLinkStyle} 
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color} 
              onMouseLeave={(e) => e.target.style.color = '#fff'}>Inicio</a>
          </li>
          <li>
            <a 
              href="/autos" 
              style={navLinkStyle} 
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color} 
              onMouseLeave={(e) => e.target.style.color = '#fff'}>Nissan GT-R™</a>
          </li>
          <li>
            <a 
              href="/contacto" 
              style={navLinkStyle} 
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color} 
              onMouseLeave={(e) => e.target.style.color = '#fff'}>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
