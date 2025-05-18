import './App.css'; // importa seu CSS normalmente
import { Link } from 'react-router-dom'; // importa o Link do react-router-dom


export default function App() {
  return (
    <>
      {/* ANIMAÇÃO EM ONDAS */}
      <div className="background-wave-wrapper">
        <img
          src="https://github.com/gicarolinedev/devstyle/blob/main/assets/images/devstylebackground.png?raw=true"
          className="background-wave"
          alt="Background waves"
        />
      </div>

      {/* BOTÃO NO MEIO */}
<Link to="/produtos" className="btn-ver-produtos central-botao">
  VER PRODUTOS
</Link>

      {/* NAV BAR */}
      <header className="navbar">
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#produtos">CATEGORIAS</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </header>

      
    </>
  );
}
