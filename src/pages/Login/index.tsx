import "./styles.css";
import logo from "../../assets/logo.png";
import loginimage from "../../assets/login-image.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
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
            <input type="email" placeholder="E-mail" className="input" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" className="input" required />
          </div>
          <button type="submit" className="submit-button">
            Entrar
          </button>
        </form>
      </div>
      <div
        className="login-image-section"
        style={{ backgroundImage: `url(${loginimage})` }}
      ></div>
    </div>
  );
}