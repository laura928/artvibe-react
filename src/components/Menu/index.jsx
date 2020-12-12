import { Link } from "react-router-dom";
import "./menu.css";
import Logo from "../../recursos/img/logo.png"

function Menu() {
    return(
        <>
        <section className=" fixed-top bg-artvibe">
        <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="Artvibe" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-body-x mr-5" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <Link to="nosotros" className="nav-link text-body-x mr-5" href="nosotros.html">Nosotros</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-body-x mr-5" data-toggle="dropdown" href="#"
                        role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                        <div className="dropdown-menu text-body-x">
                            <Link to="todos" className="dropdown-item" href="cursos.html">Todos</Link>
                            <Link to="artec" className="dropdown-item" href="cursos_callejero.html">Arte Callejero</Link>
                            <Link to="dibujo"className="dropdown-item" href="cursos_dibujo.html">Dibujo a lápiz/sombras</Link>
                            <Link to="artes" className="dropdown-item" href="cursos_surrealista.html">Arte surrealista</Link>
                            <Link to="uso" className="dropdown-item" href="cursos_color.html">Uso del color</Link>
                            <Link to="lettering" className="dropdown-item" href="cursos_lettering.html">Lettering</Link>
                        </div>
                        </li>
                        <li className="nav-item">
                            <Link to="ingresa" className="nav-link text-body-x mr-5" href="ingresa.html">Ingresa</Link>
                        </li>
                        <li className="nav-item">
                             <Link to="contactanos" className="nav-link text-body-x mr-5" href="contactanos.html">Contáctanos</Link>
                        </li>
                    </ul>
                </div>
              </nav>
        </div>
    </section>
    </>
    );
}

export default Menu;