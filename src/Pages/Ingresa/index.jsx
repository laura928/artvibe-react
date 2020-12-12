import "./ingresa.css"
import Menu from "../../components/Menu"
import Ingresa1 from "../../recursos/img/sep1.png"
import Ingresa2 from "../../recursos/img/sep2.png"
import Ingresa3 from "../../recursos/img/sep3.png"

function Ingresa() {
    return(
        <>
        <Menu />
        <div className="Body">
        <div className="Centrado row">
            <div className="Descripcion col-md-12 justify-content-center">
                <h2 className="mt-5 Subtitulo text-center">¡Únete a Artvibe!</h2>
                <p className="mt-5 Parrafo">Regístrate aquí, y obtén información sobre nosotros; nuestros cursos, precios, ofertas y también actividades gratuitas para que estimules tu creatividad. <br /><br />Mantente al tanto sobre nuestras novedades. Esperamos que seas parte de nuestra comunidad de creativos y tenerte por aquí.</p>
            </div>
            <div className="Imagenes mt-5 col-md-12 justify-content-center">
                <div className="Img">
                    <img src={Ingresa1} alt="" />
                </div>
                <div className="Img">
                    <img src={Ingresa2} alt="" />
                </div>
                <div className="Img">
                    <img src={Ingresa3} alt="" />
                </div>
            </div>
            
            <div className="Formulario mt-5 mb-5 col-md-12 justify-content-center">
                <form />
                    <label className="Sub mt-3" for="Nombre">Nombre</label>
                    <input className="Input mt-n2" type="text" name="Nombre" id="Nombre" />
                    <label className="Sub mt-3" for="">Y eres...</label>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" for="customRadio1">Estudiante</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" for="customRadio2">Adulto</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" for="customRadio3">Senior</label>
                    </div>
                    <label className="Sub mt-3" for="Telefono">Telefono</label>
                    <input className="Input mt-n2" type="text" name="Telefono" id="Telefono" />
                    <label className="Sub mt-3" for="Email">Email</label>
                    <input className="Input mt-n2" type="text" name="Email" id="Email" />
                    <label className="Sub mt-3" for="Email">Mensaje</label>
                    <textarea className="Input mt-n2" name="" id="" cols="30" rows="10" >

                    </textarea>
                    <a href="" className="Boton mt-5">Enviar</a>
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

export default Ingresa;