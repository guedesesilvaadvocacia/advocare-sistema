// frontend/src/components/Login.tsx - VERSÃO PROFISSIONAL
import React, { useState, useEffect } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Efeito das partículas
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 40 + 15;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = (Math.random() * 0.2 + 0.1).toString();
        
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (username === 'guedesesilva' && password === 'jvs306') {
      setTimeout(() => {
        // Redirecionar para dashboard
        window.location.href = '/dashboard';
      }, 1500);
    } else {
      alert('Credenciais inválidas. Use: Usuário: guedesesilva | Senha: jvs306');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="particles" id="particles"></div>
      
      <div className="login-container">
        <div className="login-form">
          <div className="firm-header">
            <div className="firm-logo">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0VyxgjFuQ6UBkRkjzMgjGWVils8rUDUfbA&s" 
                alt="Guedes & Silva Logo" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="logo-fallback">G&S</div>';
                }} 
              />
            </div>
            <div className="firm-name">GUEDES & SILVA</div>
            <div className="firm-subtitle">Consultoria e Assessoria Jurídica</div>
          </div>
          
          <div className="login-header">
            <h2 className="system-title">Sistema de Gestão Advocatícia</h2>
            <p>Faça login para acessar o sistema</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Usuário</label>
              <input 
                type="text" 
                id="username" 
                placeholder="guedesesilva" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                disabled={loading}
              />
            </div>
            
            <div className="credentials-info">
              <strong>Credenciais de teste:</strong><br />
              Usuário: guedesesilva | Senha: jvs306
            </div>
            
            <div className="forgot-password">
              <a href="#">Esqueceu sua senha?</a>
            </div>
            
            <button 
              type="submit" 
              className="btn-login"
              disabled={loading}
            >
              {loading ? 'Autenticando...' : 'Entrar no Sistema'}
            </button>
          </form>
          
          <div className="footer">
            © 2023 Guedes & Silva Advogados. Todos os direitos reservados.
          </div>
        </div>
        
        <div className="login-image">
          <div className="system-description">
            <h2>Gestão Integrada para Escritórios de Advocacia</h2>
            <p>Nosso sistema oferece soluções completas para a administração do seu escritório:</p>
            
            <ul className="features">
              <li>Controle de processos e prazos</li>
              <li>Gestão de clientes e honorários</li>
              <li>Agenda e compromissos integrados</li>
              <li>Armazenamento seguro de documentos</li>
              <li>Relatórios financeiros e processuais</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
