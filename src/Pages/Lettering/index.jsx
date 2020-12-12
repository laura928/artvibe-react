import "./lettering.css";
import Menu from "../../components/Menu"
import Letra1 from "../../recursos/img/l1.png"
import Letra2 from "../../recursos/img/l2.png"
import Letra3 from "../../recursos/img/l3.png"

function Lettering() {
    return(
        <>
        <Menu />
        <div className="Body">
        <div className="Centrado col-md-9">
            <div className="Descripcion col-md-12 justify-content-center">
                <h2 className="mt-5 Subtitulo text-center">Lettering</h2>
                <p className="mt-2 Sbt text-center">Cursos dictados por: Laura Agudelo Sánchez</p>
            </div>
            <div className="Imagenes mt-5 col-md-12 justify-content-center">
                <div className="Img">
                    <img src={Letra1} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Introducción al Lettering con tinta</h3>
                    <p className="ImgDefinicion px-2">Podrás comenzar a soltar tu mano con este curso, dejrás el miedo a equivocarte, al mismo tiempo que ganas precisión en tus trazos.</p>
                </div>
                <div className="Img">
                    <img src={Letra2}alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Los secretos dorados del Lettering</h3>
                    <p className="ImgDefinicion px-2">Tendrás los mejores tips a la hora de diagramar, agregarle decoraciones a tus creaciones tipográficas, y los pasos que los buenos diseñadores utilizan.</p>
                </div>
                <div className="Img">
                    <img src={Letra3} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Decora tu hogar con el Lettering</h3>
                    <p className="ImgDefinicion px-2">Nada mejor que un hogar lleno de vida, solo necesitas interés por querer crear, y tendrás un espacio único con tus propias creaciones.</p>
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

export default Lettering;