import "./artes.css";
import Menu from "../../components/Menu"
import Otraimg1 from "../../recursos/img/as1.png"
import Otraimg2 from "../../recursos/img/as2.png"
import Otraimg3 from "../../recursos/img/as3.png"

function Artes() {
    return(
        <>
        <Menu />
        <div className="Body">
        <div className="Centrado col-md-9">
            <div className="Descripcion col-md-12 justify-content-center">
                <h2 className="mt-5 Subtitulo text-center">Arte surrealista</h2>
                <p className="mt-2 Sbt text-center">Cursos dictados por: Carolina Cespedes Gil</p>
            </div>
            <div className="Imagenes mt-5 col-md-12 justify-content-center">
                <div className="Img">
                    <img src={Otraimg1} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Despierta tu imaginación</h3>
                    <p className="ImgDefinicion px-2">Podrás aprender sobre el arte surrealista, las mejores tendencias que encontramos, y la forma en que puedes plasmar un mensaje único.</p>
                </div>
                <div className="Img">
                    <img src={Otraimg2} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Creatividad sin límites</h3>
                    <p className="ImgDefinicion px-2">Abrirás tu mente ante las infinitas posibilidades del surrealismo, con sus fundamentos explicados a través de técnicas especializadas en despertar tu creatividad.</p>
                </div>
                <div className="Img">
                    <img src={Otraimg3} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Monstruos coloridos</h3>
                    <p className="ImgDefinicion px-2">Diviértete creando personajes originales llenos de vida y color, para expresar tu mensaje de manera más original, llamativa y contundente.</p>
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

export default Artes;