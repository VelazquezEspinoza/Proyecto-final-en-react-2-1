import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import imagen1 from './assets/imagen1.jpg';
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import imagen4 from './assets/imagen4.jpg';
import imagen5 from './assets/imagen5.jpg';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<SeccionInicio />} />
        <Route path="/autos" element={<SeccionAutos />} />
        <Route path="/contacto" element={<SeccionCotizacion />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

// Sección de inicio (login y registro)
const SeccionInicio = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Por favor, ingresa un correo y una contraseña.');
      return;
    }
    alert(`Iniciado sesión con: ${email}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Por favor, ingresa un correo y una contraseña.');
      return;
    }
    alert(`Registrado con: ${email}`);
  };

  return (
    <div className="seccion-inicio">
      <h2>Nissan Motor Corporation</h2>
      <div className="login-register-container">
        {isLogin ? (
          <form onSubmit={handleLogin} className="login-form">
            <h3>Iniciar Sesión</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Iniciar sesión</button>
            <p>¿No tienes cuenta? <span onClick={() => setIsLogin(false)} className="toggle-link">Regístrate</span></p>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="login-form">
            <h3>Registrarse</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Registrarse</button>
            <p>¿Ya tienes cuenta? <span onClick={() => setIsLogin(true)} className="toggle-link">Inicia sesión</span></p>
          </form>
        )}
      </div>
    </div>
  );
};

// Sección de autos
const SeccionAutos = () => {
  const autos = [
    { id: 1, nombre: 'Nissan GT-R™ NISMO El superauto GT-R desafía las convenciones en cada curva.', precio: '$3,900,000 MXN', imagen: imagen1 },
    { id: 2, nombre: '565 caballos de fuerza Hasta 467 lbs-ft de torque.', imagen: imagen2 },
    { id: 3, nombre: 'Aerodinámica Diseño avanzado.', imagen: imagen3 },
    { id: 4, nombre: 'AWD Maniobrabilidad en todas las estaciones.', imagen: imagen4 },
    { id: 5, nombre: '6 velocidades Transmisión de doble embrague', imagen: imagen5 },
  ];

  return (
    <div className="seccion-autos">
      <h2>Nissan GT-R™ NISMO</h2>
      <div className="autos-list">
        {autos.map(({ id, nombre, precio, imagen }) => (
          <div key={id} className="auto-item">
            <img src={imagen} alt={`Imagen del auto ${nombre}`} />
            <h3>{nombre}</h3>
            {id === 1 && <p>Precio: {precio}</p>} {/* Solo muestra el precio para el auto con id 1 */}
          </div>
        ))}
      </div>
    </div>
  );
};

// Sección de cotización (anteriormente contacto)
const SeccionCotizacion = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [autoSeleccionado, setAutoSeleccionado] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleCotizacionSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !autoSeleccionado || !mensaje.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert(`Cotización solicitada para el auto: ${autoSeleccionado}.\nTe contactaremos a: ${email}`);
  };

  return (
    <div className="cotizacion-container">
      <h2>Solicita tu Cotización</h2>
      <form onSubmit={handleCotizacionSubmit} className="cotizacion-form">
        <input
          type="text"
          placeholder="Tu Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          value={autoSeleccionado}
          onChange={(e) => setAutoSeleccionado(e.target.value)}
          required
        >
          <option value="">Selecciona un auto</option>
          <option value="Nissan GT-R™ NISMO">Nissan GT-R™ NISMO</option>
          <option value="Nissan GT-R™ 2025">Nissan GT-R™ 2025</option>
          <option value="Nissan GT-R™ 2024">Nissan GT-R™ 2024</option>
          {/* Agregar más opciones según los autos disponibles */}
        </select>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Mensaje adicional..."
          rows="5"
          required
        />
        <button type="submit">Solicitar Cotización</button>
      </form>
    </div>
  );
};

export default App;
