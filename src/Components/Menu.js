import React, { useState } from 'react';

const Menu = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Correo: ${email}, Teléfono: ${phone}`);
    // Aquí podrías enviar los datos a un servidor si lo deseas
  };

  // Estilos en línea
  const menuStyle = {
    backgroundColor: '#333',
    padding: '20px 40px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const menuListStyle = {
    display: 'flex',
    listStyle: 'none',
  };

  const menuItemStyle = {
    marginLeft: '20px',
  };

  const menuLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const menuLinkHoverStyle = {
    color: '#007bff',
  };

  const contactoStyle = {
    backgroundColor: '#fff',
    color: '#333',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    width: '300px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const submitBtnStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const submitBtnHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <nav style={menuStyle}>
      <ul style={menuListStyle}>
        <li style={menuItemStyle}>
          <a href="/" style={menuLinkStyle} onMouseEnter={(e) => e.target.style.color = menuLinkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Inicio</a>
        </li>
        <li style={menuItemStyle}>
          <a href="/autos" style={menuLinkStyle} onMouseEnter={(e) => e.target.style.color = menuLinkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Autos</a>
        </li>
        <li style={menuItemStyle}>
          <a href="/contacto" style={menuLinkStyle} onMouseEnter={(e) => e.target.style.color = menuLinkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#fff'}>Contacto</a>
        </li>
      </ul>
      
      {/* Formulario de contacto */}
      <div style={contactoStyle}>
        <h3>Déjanos tu contacto:</h3>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="phone">Teléfono:</label>
            <input 
              type="tel" 
              id="phone"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
              style={inputStyle}
            />
          </div>
          <button type="submit" style={submitBtnStyle} onMouseEnter={(e) => e.target.style.backgroundColor = submitBtnHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>Enviar</button>
        </form>
      </div>
    </nav>
  );
};

export default Menu;
