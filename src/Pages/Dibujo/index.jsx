import "./dibujo.css"
import Menu from "../../components/Menu"
import Img1 from "../../recursos/img/s1.png"
import Img2 from "../../recursos/img/s2.png"
import Img3 from "../../recursos/img/s3.png"

function Dibujo() {
    return(
        <>
        <Menu />
        <div className="Body">
        <div className="Centrado col-md-9">
            <div className="Descripcion col-md-12 justify-content-center">
                <h2 className="mt-5 Subtitulo text-center">Dibujo a lápiz con sombras</h2>
                <p className="mt-2 Sbt text-center">Cursos dictados por: Andrea Alejandra Olivares</p>
            </div>
            <div className="Imagenes mt-5 col-md-12 justify-content-center">
                <div className="Img">
                    <img src={Img1} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Realismo con sombras a lápiz</h3>
                    <p className="ImgDefinicion px-2">Conoce los fundamentos del dibujo a lápiz con sombra, con una dinámica realista, enfocándonos en las maneras de darle vida a tus obras y un toque de impacto visual.</p>
                </div>
                <div className="Img">
                    <img src={Img2} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Retrato realista con lápiz de grafito</h3>
                    <p className="ImgDefinicion px-2">Aprenderás los usos que le podemos dar al grafito, su versatilidad para ilustrar, especialmente al crear impactantes retratos realistas con sombras y luces.</p>
                </div>
                <div className="Img">
                    <img src={Img3} alt="" />
                    <h3 className="ImgDescripcion text-center mt-5">Dibujo con sombras y rapidógrafos</h3>
                    <p className="ImgDefinicion px-2">Adéntrate también en el arte del dibujo con sombra, y tinta, en este curso disfrutrarás creando caricaturas tanto divertidas como realistas.</p>
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

export default Dibujo;