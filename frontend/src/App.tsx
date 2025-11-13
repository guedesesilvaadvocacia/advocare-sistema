import React, { useState } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
  };

  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Painel Advocare</h1>
        <p>Bem-vindo, {user.name}!</p>
      </header>
      <main className="app-main">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Clientes</h3>
            <p>Gerencie seus clientes</p>
          </div>
          <div className="dashboard-card">
            <h3>Processos</h3>
            <p>Controle de processos</p>
          </div>
          <div className="dashboard-card">
            <h3>Agenda</h3>
            <p>Compromissos e prazos</p>
          </div>
          <div className="dashboard-card">
            <h3>Documentos</h3>
            <p>Arquivos e petições</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
