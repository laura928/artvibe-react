import "./nosotros.css";
import Menu from "../../components/Menu"
import Uno from "../../recursos/img/1.png"
import Dos from "../../recursos/img/2.png"
import Tres from "../../recursos/img/3.png"


function Nosotros() {
    return (
        <section>
            <Menu />
            <section className="Body">
                <div className="Centrado row">
                    <div className="Descripcion col-md-13 justify-content-center">
                        <h2 className="mt-5 subtitulo text-center">¿Quienes somos?</h2>
                        <p className="mt-5 Parrafo">Ofrecemos cursos virtuales de arte gráfica, incluímos la tipografía, el graffiti, el surrealismo, dibujo a lápiz con sombras y uso de color, nuestro enfoque es brindar herramientas que le permitan a los usuarios mejorar tanto profesional como en sus creaciones artísticas. <br /><br />Actualmente, Contamos con los cursos ya mencionados, en los que podrás adquirir las habilidades que se mencionan, y crecer no sólo de forma artística si no también profesionalmente en tu campo elegido:</p>
                    </div>

                    <div className="card-deck">
                        <div className="card">
                            <img src={Uno} className="card-img-top" alt="" className="rounded" />
                        </div>
                        <div className="card">
                            <img src={Dos} className="card-img-top" alt="" className="rounded" />
                        </div>
                        <div className="card">
                            <img src={Tres} className="card-img-top" alt="" className="rounded" />
                        </div>
                    </div>

                    <div className="Conceptos mt-n5 col-md-12 justify-content-center">
                        <div className="ContenidoConcepto">
                            <div className="Titulo">
                                <h2 className="Subtitulo">Misión</h2>
                            </div>
                            <div className="Definicion">
                                <p className="Parrafo">Ofrecer cursos de calidad, en los cuales los usuarios mejoren en los sectores de dibujo y lettering, y su creatividad se vea fomentada para que logren desarrollar proyectos creativos.</p>
                            </div>
                        </div>
                        <div className="ContenidoConcepto mt-5">
                            <div className="Titulo">
                                <h2 className="Subtitulo">Visión</h2>
                            </div>
                            <div className="Definicion">
                                <p className="Parrafo">Para el 2022 vamos a ser reconocidos como uno de los mejores cursos para enseñar arte gráfica, seremos reconocidos a nivel nacional en Colombia.</p>
                            </div>
                        </div>
                        <div className="ContenidoConcepto mt-5 ">
                            <div className="Titulo justify-content-center">
                                <h2 className="Subtitulo">Valores</h2>
                            </div>
                            <div className="Definicion">
                                <ol>
                                    <li className="Numeral"><p className="Numeral w">Creatividad</p></li>
                                    <li className="Numeral"><p className="Numeral w">Innovación</p></li>
                                    <li className="Numeral"><p className="Numeral w">Calidad</p></li>
                                    <li className="Numeral"><p className="Numeral w">Amabilidad con el usuario</p></li>
                                    <li className="Numeral"><p className="Numeral w">Responsabilidad</p></li>
                                </ol>
                            </div>
                        </div>
                        <div className="ContenidoConcepto mt-5">
                            <div className="Titulo">
                                <h2 className="Subtitulo">Objetivo general</h2>
                            </div>
                            <div className="Definicion">
                                <p className="Parrafo">Enseñar a las personas interesadas en aprender a crear arte gráfica; dibujo, en donde ven técnicas de dibujo y color, y lettering en dónde aprenden el tipo de la letra adecuada para X trabajo, a través de cursos virtuales, y con herramientas que fomentan el desarrollo de la creatividad e imaginación.</p>
                            </div>
                        </div>
                        <div className="ContenidoConcepto mt-5">
                            <div className="Titulo">
                                <h2 className="Subtitulo">Objetivos específicos</h2>
                            </div>
                            <div className="Definicion">
                                <ol>
                                    <li className="Numeral"><p className="Numeral w">Ofrecer herramientas de calidad, que sirvan a nuestros usuarios a la hora de desarrollar una creación artística.</p></li>
                                    <li className="Numeral"><p className="Numeral w">Ofrece calidad a un precio accesible, y un paso a paso que logre ser claro para el usuario.</p></li>
                                    <li className="Numeral"><p className="Numeral w">Fomentar la creatividad de nuestros usuarios, mediante diferentes herramientas de arte ofrecidas.</p></li>
                                    <li className="Numeral"><p className="Numeral w">Enseñar a las personas las partes que componen el arte gráfica, a la hora de realizar un dibujo y usar tipografías.</p></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="mt-5 Subtitulo text-center">Aprende desde cero, paso a paso</h2>
                        <p className="mt-5 Parrafo">Buscamos que el usuario aprenda desde 0, como si apenas comenzara, hasta llegar a un nivel de habilidad superior, porque entendemos que es frustrante cuando no se logra entender cómo se realiza X proceso, y simplemente nos muestran los resultados y un proceso detallado, por eso vamos paso a paso.</p>
                    </div>
                </div>
            </section>
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
        </section>
    );
}

export default Nosotros;