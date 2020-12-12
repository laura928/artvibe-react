import "./contactanos.css"
import Menu from "../../components/Menu"
import Mapa from "../../recursos/img/map.png"

function Contactanos() {
    return (
        <>
            <Menu />
            <div className="Body">
                <div className="Centrado row">
                    <div className="Descripcion col-md-12">
                        <h2 className="mt-5 Subtitulo text-center">Contáctanos</h2>
                        <p className="mt-5 Parrafo text-center">Si cuentas con cualquier duda, además de contar con nuestras redes sociales, <br /> podrás contactarnos a través de los siguientes medios:</p>
                    </div>
                    <div className="Descripcion mt-3 col-md-12">
                        <h2 className="mt-5 Subtitulo text-center">Artvibe</h2>
                        <p className="mt-3 Parrafo text-center">P° de la Castellana 79, Madrid, 28046<br />Número de teléfono: (+34) 947 002 963<br />Email: artvibe2020@gmail.com </p>
                    </div>
                    <div className="Mapa mt-5 mb-5 col-md-12 justify-content-center">
                        <img src={Mapa} alt="" />
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

export default Contactanos;