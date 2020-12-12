import "./todos.css"
import Menu from "../../components/Menu"
import Segunda from "../../recursos/img/2m.png"
import Tercera from "../../recursos/img/3m.png"
import Cuarta from "../../recursos/img/4.png"
import Quinta from "../../recursos/img/5.png"
import Primera from "../../recursos/img/1m.png"

function Todos(){
    return(
        <>
        <Menu />
        <div className="Body row">
        <div className="Centrado col-md-9">
            <div className="Descripcion">
                <h2 className="mt-5 Subtitulo text-center">Cursos</h2>
                <p className="mt-5 Parrafo">Presiona las flechas que aparecen en los extremos de las imágenes para elegir el cursos con el que deseas emprender esta aventura en el aprendizaje del arte. <br /><br />Una vez te decidas y des clic al que más llama tu atención, la web te llevará a otra pestaña con toda la información del tema seleccionado, ¡que lo disfrutes!</p>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col s12">
                <div className="carousel center-align">
                    <div className="carousel-item">
                        <a href="cursos_callejero.html">Arte Callejero</a> 
                        <img src={Segunda} alt="" /></div>
    
                    <div className="carousel-item">
                        <a href="cursos_dibujo.html">Dibujo a lápiz con sombras</a>
                        <img src={Tercera} alt="" />
                    </div>
    
                    <div className="carousel-item">
                        <a href="cursos_arte.html">Arte surrealista</a>
                        <img src={Cuarta} alt="" />
                    </div>
    
                    <div className="carousel-item">
                        <a href="cursos_color.html">Uso del color</a>
                        <img src={Quinta} alt="" />
                    </div>
    
                    <div className="carousel-item">
                        <a href="cursos_lettering.html">Lettering</a>
                        <img src={Primera} alt="" />
                    </div>
    
                </div>
            </div>
        </div>
    </div>
<footer />
    <div className="footer">
        <div className="Centrado">
            <div className="Linea">
                <hr />
            </div>
            <div className="InRedes">
                <div className="Redes">
                    <div className="Icon">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="IconText">
                        <p>@Artvibe2020</p>
                    </div>
                </div>
                <div className="Redes">
                    <div className="Icon">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="IconText">
                        <p>Artvibe2020</p>
                    </div>
                </div>
                <div className="Redes">
                    <div className="Icon">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="IconText">
                        <p>@Artvibe2020</p>
                    </div>
                </div>
                <div className="Redes">
                    <div className="Icon">
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="IconText">
                        <p>3008352186</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="FooterInferior">
            <p>Artvibe - Todos los derechos reservados. 2020</p>
        </div>
    </div>
    
        </>
    );
}

export default Todos;