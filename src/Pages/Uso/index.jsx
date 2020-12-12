import "./uso.css";
import Menu from "../../components/Menu"
import Color1 from "../../recursos/img/uc1.png"
import Color2 from "../../recursos/img/uc2.png"
import Color3 from "../../recursos/img/uc3.png"

function Uso() {
    return (
        <>
        <Menu />
        <div className="Body">
        <div className="Centrado col-md-9">
            <div className="Descripcion col-md-12 justify-content-center">
                <h2 className="mt-5 Subtitulo text-center">Uso del color</h2>
                <p className="mt-2 Sbt text-center">Cursos dictados por: Daniel Pérez Garcia</p>
            </div>
            <div className="Imagenes mt-5 col-md-12 justify-content-center">
                <div className="Img">
                    <img src={Color1} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">El color como fundamento</h3>
                    <p className="ImgDefinicion px-2">Adéntrate en el color, sabrás cual es el significado que se le da a cada color, como usarlos al transmitir tus mensajes y cómo mezclarlos de la mejor manera.</p>
                </div>
                <div className="Img">
                    <img src={Color2} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Color, formas y estilos: significado</h3>
                    <p className="ImgDefinicion px-2">Aprende como comergen estas 3 cosas para dar lugar a un mensaje visual con mucho significado y lleno de símbolos únicos</p>
                </div>
                <div className="Img">
                    <img src={Color3} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">El color como fundamento</h3>
                    <p className="ImgDefinicion px-2">Adéntrate en el color, sabrás cual es el significado que se le da a cada color, como usarlos al transmitir tus mensajes y cómo mezclarlos de la mejor manera.</p>
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

export default Uso;