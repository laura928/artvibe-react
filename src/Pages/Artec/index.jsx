import "./artec.css";
import Menu from "../../components/Menu"
import Otra1 from "../../recursos/img/ac1.png"
import Otra2 from "../../recursos/img/ac2.png"
import Otra3 from "../../recursos/img/ac3.png"

function Artec() {
    return(
        <>
        <Menu />
        <div className="Body row">
        <div className="Centrado col-md-9">
            <div className="Descripcion col-md-12 justify-content-center">
                <h2 className="mt-5 Subtitulo text-center">Arte callejero</h2>
                <p className="mt-2 Sbt text-center">Cursos dictados por: Yojan Taborda Delgado</p>
            </div>
            <div className="Imagenes mt-5 col-md-12 justify-content-center">
                <div className="Img">
                    <img src={Otra1} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Iniciación a la pintura con spray</h3>
                    <p className="ImgDefinicion px-2">Conocerás los principios fundamentales, los materiales y las técnicas básicas del Graffiti. Aprenderás sobre la versatilidad que tiene el spray a la hora de realizar piezas de impacto visual.</p>
                </div>
                <div className="Img">
                    <img src={Otra2} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Ilustración de personajes</h3>
                    <p className="ImgDefinicion px-2">Ilustra de forma realista, aprende sobre el impacto del street art, este curso es para todo aquel que quiere aprender sobre la técnica pictórica más popular. El Grafitti.</p>
                </div>
                <div className="Img">
                    <img src={Otra3} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Plasmando la historia</h3>
                    <p className="ImgDefinicion px-2">Usa esta técnica para plasmar mensajes contundentes y reflexiones sobre nuestra vida, aprende a como crear consciencia social a través del arte del Graffiti.</p>
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

export default Artec;