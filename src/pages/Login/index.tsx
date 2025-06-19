import "./styles.css";
import logo from "../../assets/logo.png";
import loginimage from "../../assets/login-image.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GreenButton from '../../components/GreenButton';
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="logo">
          <img src={logo} alt="GreenSense Logo" className="logo-image" />
          <p className="description">
            Aplicação de gerenciamento do GreenSense
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Senha"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <GreenButton type="submit">
            Entrar
          </GreenButton>
        </form>
      </div>
      <div
        className="login-image-section"
        style={{ backgroundImage: `url(${loginimage})` }}
      ></div>
    </div>
  );
}
