import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLoginSuccess: (userData: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (username === 'guedesesilva' && password === 'jvs306') {
      setTimeout(() => {
        onLoginSuccess({
          name: 'Guedes & Silva',
          email: 'contato@guedesesilva.com.br',
          role: 'admin'
        });
        setLoading(false);
      }, 1500);
    } else {
      alert('Credenciais inválidas. Use: Usuário: guedesesilva | Senha: jvs306');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
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
            © 2024 Guedes & Silva Advogados. Todos os direitos reservados.
          </div>
        </div>
        
        <div className="login-image">
          <div className="system-description">
            <h2>Gestão Integrada para Escritórios de Advocacia</h2>
            <p>Nosso sistema oferece soluções completas para a administração do seu escritório:</p>
            
            <ul className="features">
              <li>• Controle de processos e prazos</li>
              <li>• Gestão de clientes e honorários</li>
              <li>• Agenda e compromissos integrados</li>
              <li>• Armazenamento seguro de documentos</li>
              <li>• Relatórios financeiros e processuais</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
